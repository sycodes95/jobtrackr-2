import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    // Ensure Vitest respects the tsconfig paths
    alias: {
      '@': resolve(__dirname, './src'),
      // other aliases as needed
    },
  },
})