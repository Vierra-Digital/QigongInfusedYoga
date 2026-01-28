'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import EmailSignupModal from './EmailSignupModal'

type ContextValue = {
  open: () => void
  close: () => void
}

const SignupModalContext = createContext<ContextValue | null>(null)

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <SignupModalContext.Provider value={{ open, close }}>
      {children}
      <EmailSignupModal isOpen={isOpen} onClose={close} />
    </SignupModalContext.Provider>
  )
}

export function useSignupModal() {
  const ctx = useContext(SignupModalContext)
  if (!ctx) throw new Error('useSignupModal must be used within SignupModalProvider')
  return ctx
}
