import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        impossiblelist: resolve(__dirname, 'impossiblelist.html'),
        cv: resolve(__dirname, 'cv.html'),
      },
    },
  },
});
