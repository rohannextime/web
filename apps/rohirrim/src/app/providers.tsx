// app/providers.tsx
'use client'
import React from 'react'

import { ChakraProvider } from '@nextime-ui/react'

import { CacheProvider } from '@chakra-ui/next-js'

import { theme } from '../theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
