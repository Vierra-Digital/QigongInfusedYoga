import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
const MAILCHIMP_TAG = process.env.MAILCHIMP_TAG || 'FREE Qigong Class'
const MAILCHIMP_FORM_ACTION = process.env.MAILCHIMP_FORM_ACTION

const USE_API = Boolean(MAILCHIMP_API_KEY && MAILCHIMP_LIST_ID)

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function md5(str: string): string {
  return createHash('md5').update(str.toLowerCase()).digest('hex')
}

function getMailchimpBaseUrl(): string {
  const match = MAILCHIMP_API_KEY!.match(/-([a-z0-9]+)$/i)
  const dc = match ? match[1] : 'us18'
  return `https://${dc}.api.mailchimp.com/3.0`
}

type MergeFields = { FNAME?: string; LNAME?: string }

async function subscribeViaApi(
  email: string,
  mergeFields?: MergeFields
): Promise<{ ok: boolean; status: number; error?: string }> {
  const base = getMailchimpBaseUrl()
  const hash = md5(email)
  const auth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')

  const putBody: { email_address: string; status: string; merge_fields?: MergeFields } = {
    email_address: email,
    status: 'subscribed',
  }
  if (mergeFields && (mergeFields.FNAME !== undefined || mergeFields.LNAME !== undefined)) {
    putBody.merge_fields = {
      FNAME: mergeFields.FNAME ?? '',
      LNAME: mergeFields.LNAME ?? '',
    }
  }

  const putRes = await fetch(`${base}/lists/${MAILCHIMP_LIST_ID}/members/${hash}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(putBody),
  })

  if (!putRes.ok) {
    const data = await putRes.json().catch(() => ({}))
    const msg = typeof data.detail === 'string' ? data.detail : data.title || 'MailChimp error'
    return { ok: false, status: putRes.status, error: msg }
  }

  const tagRes = await fetch(`${base}/lists/${MAILCHIMP_LIST_ID}/members/${hash}/tags`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tags: [{ name: MAILCHIMP_TAG, status: 'active' }],
    }),
  })

  if (!tagRes.ok) {
    const data = await tagRes.json().catch(() => ({}))
    console.warn('MailChimp add-tag failed:', data)
    return { ok: false, status: tagRes.status, error: 'Added to list but tagging failed.' }
  }

  return { ok: true, status: putRes.status }
}

export async function POST(request: NextRequest) {
  if (!USE_API && !MAILCHIMP_FORM_ACTION?.startsWith('https://')) {
    console.error('MailChimp not configured: set MAILCHIMP_API_KEY+MAILCHIMP_LIST_ID or MAILCHIMP_FORM_ACTION')
    return NextResponse.json(
      { error: 'Signup is not configured. Please try again later.' },
      { status: 503 }
    )
  }

  let body: { email?: string; firstName?: string; lastName?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  if (!email) {
    return NextResponse.json({ error: 'Please enter your email address.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const firstName = typeof body?.firstName === 'string' ? body.firstName.trim() : ''
  const lastName = typeof body?.lastName === 'string' ? body.lastName.trim() : ''
  const mergeFields: MergeFields = {}
  if (firstName) mergeFields.FNAME = firstName
  if (lastName) mergeFields.LNAME = lastName

  if (USE_API) {
    try {
      const result = await subscribeViaApi(email, Object.keys(mergeFields).length ? mergeFields : undefined)
      if (result.ok) return NextResponse.json({ success: true })
      if (result.status === 400) {
        const base = getMailchimpBaseUrl()
        const hash = md5(email)
        const auth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')
        if (mergeFields.FNAME !== undefined || mergeFields.LNAME !== undefined) {
          const patchFields: MergeFields = {}
          if (mergeFields.FNAME !== undefined) patchFields.FNAME = mergeFields.FNAME
          if (mergeFields.LNAME !== undefined) patchFields.LNAME = mergeFields.LNAME
          await fetch(`${base}/lists/${MAILCHIMP_LIST_ID}/members/${hash}`, {
            method: 'PATCH',
            headers: {
              Authorization: `Basic ${auth}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ merge_fields: patchFields }),
          })
        }
        const tagRes = await fetch(`${base}/lists/${MAILCHIMP_LIST_ID}/members/${hash}/tags`, {
          method: 'POST',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tags: [{ name: MAILCHIMP_TAG, status: 'active' }],
          }),
        })
        if (tagRes.ok) return NextResponse.json({ success: true })
      }
      return NextResponse.json(
        { error: result.error || 'Something went wrong. Please try again.' },
        { status: result.status >= 400 && result.status < 500 ? result.status : 502 }
      )
    } catch (e) {
      console.error('MailChimp API subscribe error:', e)
      return NextResponse.json(
        { error: 'Something went wrong. Please try again.' },
        { status: 500 }
      )
    }
  }

  const formBody = new URLSearchParams({ EMAIL: email }).toString()
  try {
    const res = await fetch(MAILCHIMP_FORM_ACTION!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody,
      redirect: 'manual',
    })
    if (res.status === 302) {
      const loc = (res.headers.get('location') ?? '').toLowerCase()
      if (loc.includes('error') || loc.includes('invalid')) {
        return NextResponse.json(
          { error: "We couldn't add that email. It may already be subscribed or invalid." },
          { status: 422 }
        )
      }
      return NextResponse.json({ success: true })
    }
    if (res.status >= 200 && res.status < 300) return NextResponse.json({ success: true })
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 502 }
    )
  } catch (e) {
    console.error('MailChimp form subscribe error:', e)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
