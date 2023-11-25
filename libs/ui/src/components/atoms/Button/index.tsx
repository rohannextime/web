import React, { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

Button.displayName = 'Button'
