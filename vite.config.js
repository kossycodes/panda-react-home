import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "panda-react-home",
  plugins: [react({
    include: "**/*.jsx",
  })],
  server: {
    watch: {
      usePolling: true
    }
    
  }
})
