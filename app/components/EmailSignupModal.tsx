'use client'

import { useState, useCallback, useEffect } from 'react'
import styles from './EmailSignupModal.module.css'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function EmailSignupModal({ isOpen, onClose }: Props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const trimmed = email.trim()
      if (!trimmed) return
      setStatus('loading')
      setMessage('')
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: trimmed,
            firstName: firstName.trim() || undefined,
            lastName: lastName.trim() || undefined,
          }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          setStatus('error')
          setMessage(data.error || 'Something went wrong. Please try again.')
          return
        }
        setStatus('success')
        setMessage('Thanks! Check your inbox for your free class link and video.')
        setFirstName('')
        setLastName('')
        setEmail('')
      } catch {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    },
    [email, firstName, lastName]
  )

  const handleClose = useCallback(() => {
    onClose()
    setStatus('idle')
    setMessage('')
    setFirstName('')
    setLastName('')
    setEmail('')
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose()
  }

  useEffect(() => {
    if (!isOpen) return
    const prevBody = document.body.style.overflow
    const prevHtml = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevBody
      document.documentElement.style.overflow = prevHtml
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="signup-modal-title">
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.close}
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id="signup-modal-title" className={styles.title}>
          Get Your Free Class & Healing Video
        </h2>
        {status !== 'success' && (
          <p className={styles.subtitle}>
            Enter your name and email and we&apos;ll send you the Zoom link and your free 50-minute Qigong Infused Yoga® video.
          </p>
        )}
        {status === 'success' ? (
          <div className={styles.success}>
            <div className={styles.successCheckWrap} aria-hidden>
              <svg className={styles.successCheckSvg} viewBox="0 0 52 52">
                <circle className={styles.successCheckCircle} cx="26" cy="26" r="24" fill="none" strokeWidth="2" />
                <path className={styles.successCheckPath} fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-18" />
              </svg>
            </div>
            <p className={styles.successText}>Thanks! Check your inbox for your free class link and video.</p>
            <button type="button" className={styles.successClose} onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameRow}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className={styles.input}
                disabled={status === 'loading'}
                autoComplete="given-name"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className={styles.input}
                disabled={status === 'loading'}
                autoComplete="family-name"
              />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={styles.input}
              required
              disabled={status === 'loading'}
              autoComplete="email"
            />
            {message && status !== 'loading' && (
              <p className={status === 'error' ? styles.errorText : styles.message}>
                {message}
              </p>
            )}
            <button type="submit" className={styles.submit} disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : 'Send Me the Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
