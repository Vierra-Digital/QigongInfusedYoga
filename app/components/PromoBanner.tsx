'use client'

import { useState, useEffect } from 'react'
import styles from './PromoBanner.module.css'

const STORAGE_KEY = 'qiy-promo-banner-dismissed'

export default function PromoBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== '1') {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="region" aria-label="Event announcement">
      <div className={styles.inner}>
        <p className={styles.text}>
          End Your Sunday With Qigong - Aloha Yin with Lynne 🌺 7pm at 6/7 on 6/14
        </p>
        <button
          type="button"
          className={styles.close}
          onClick={dismiss}
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  )
}
