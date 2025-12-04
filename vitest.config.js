import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
  resolve: {
    alias: {
      '@components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '@constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '@store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '@hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '@window': resolve(dirname(fileURLToPath(import.meta.url)), 'src/window'),
      '@hooks': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hooks'),
    },
  },
})