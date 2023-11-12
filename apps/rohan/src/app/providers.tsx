// app/providers.tsx
'use client'
import React from 'react'

import { CacheProvider } from '@nextime-ui/next-js'
import { ChakraProvider } from '@nextime-ui/react'

import { theme } from '../theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
