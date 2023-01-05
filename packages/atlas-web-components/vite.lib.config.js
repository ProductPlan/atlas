import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // find, for the SASS files, replace the ~ with nothing, so that it compiles
      // the SASS files correctly on the Vite project
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
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
