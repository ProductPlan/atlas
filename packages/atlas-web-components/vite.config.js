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
  plugins: [preact()]
})
