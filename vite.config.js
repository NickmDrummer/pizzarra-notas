import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qrcode(), // only applies in dev mode
  ],
});
