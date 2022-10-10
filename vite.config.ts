import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import ViteFaviconsPlugin from 'vite-plugin-favicon'

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    // dev specific config
    return {
      plugins: [
        react(), 
        tsconfigPaths(), 
        //ViteFaviconsPlugin('./src/assets/favicon.png')
      ],
      assetsInclude: ['**/*.spline']
    }
  } else {
    // build specific config
    return {
      build: {
        outDir: 'docs'
      },
      plugins: [
        react(), 
        tsconfigPaths(), 
        ViteFaviconsPlugin('./src/assets/favicon.png')
      ],
      assetsInclude: ['**/*.spline']
    }
  }
})