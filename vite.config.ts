import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteFaviconsPlugin from 'vite-plugin-favicon'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), ViteFaviconsPlugin('./src/assets/favicon.png')],
  assetsInclude: ['**/*.spline']
})

