import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions: {
      input: ['./src/components/BasicButton.jsx'],
      output: {
        sourcemap: false,
        format: 'esm',
        name: 'app',
        entryFileNames: `lib/[name].js`,
        chunkFileNames: `lib/[name].js`,
        assetFileNames: `lib/[name].[ext]`,
      },
    },
    minify: true,
  },
  plugins: [preact()]
})
