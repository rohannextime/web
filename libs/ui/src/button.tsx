import React from 'react'

import { css } from 'styled-system/css'

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={css({ color: 'blue.100' })}>{children}</button>
}
