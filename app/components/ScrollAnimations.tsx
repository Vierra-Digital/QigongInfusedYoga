'use client'

import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animate-in class - using attribute selector in CSS
          entry.target.classList.add('animate-in')
          // Only animate once
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Wait for DOM to be ready
    const timeout = setTimeout(() => {
      // Observe all sections (excluding hero which should be visible immediately)
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        // Skip first section (hero) - index 0, and finalCta (last section)
        const sectionClasses = section.className || ''
        const isHero = sectionClasses.includes('hero')
        const isFinalCta = sectionClasses.includes('finalCta')
        
        if (!isHero && !isFinalCta) {
          // Check if already in viewport
          const rect = section.getBoundingClientRect()
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
          
          if (isInViewport) {
            // Already visible, add class immediately
            section.classList.add('animate-in')
          } else {
            // Observe for when it comes into view
            observer.observe(section)
          }
        }
      })

      // Also observe cards and testimonials
      const cards = document.querySelectorAll('[class*="card"], [class*="testimonial"]')
      cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInViewport) {
          card.classList.add('animate-in')
        } else {
          observer.observe(card)
        }
      })
    }, 50)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return null
}

