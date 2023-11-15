// app/providers.tsx
'use client'
import React from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@nextime-ui/react'
import { theme } from '../../../../libs/theme'


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}
