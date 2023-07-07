// vite.config.js
import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 50252,
    },
    resolve: {
        alias: {
          'locales': './locales',
        },
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'lib/index.ts'),
            name: 'oscd-template-editor',
            // the proper extensions will be added
            fileName: 'oscd-template-editor',
            formats: ['es'],
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {},
            },
        },
    },
})