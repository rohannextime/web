import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  entry: ['src/index.ts'],
  external: ['react', 'react-dom', 'styled-system'],
  format: ['esm']
})
