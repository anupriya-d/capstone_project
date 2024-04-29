import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': 'http://localhost:8000/',
      '/tracks': 'http://localhost:8000/',
      '/reviews': 'http://localhost:8000/',
      '/bookings': 'http://localhost:8000/',
      '/images': 'http://localhost:8000/'
    }
  }
})
