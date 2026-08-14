import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    fs: {
      strict: false,
    },
  },
  plugins: [
    {
      name: 'cv-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/cv' || req.url === '/CV' || req.url === '/cv/') {
            req.url = '/cv/index.html';
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        impossiblelist: resolve(__dirname, 'impossiblelist.html'),
      },
    },
  },
});
