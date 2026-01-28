'use client'

import { useSignupModal } from './SignupModalContext'

type Props = {
  className: string
  children: React.ReactNode
}

export default function CtaButton({ className, children }: Props) {
  const { open } = useSignupModal()
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  )
}
