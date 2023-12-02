import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs']
})
