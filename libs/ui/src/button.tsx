import React from 'react'

import { styled } from 'styled-system/jsx'

export interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <styled.button bg="blue.500" color="white" py="2" px="4" rounded="md">
      {children}
    </styled.button>
  )
}
