import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // allow external access
    allowedHosts: [
      '8b42-110-235-233-196.ngrok-free.app' // your current ngrok host
    ]
  }
});

