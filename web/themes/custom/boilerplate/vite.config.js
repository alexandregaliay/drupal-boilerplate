// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: '/',
    build: {
      manifest: true,
      emptyOutDir: true,
      rollupOptions: {
        input: ['./src/js/main.js', './src/scss/main.scss'],
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
    server: {
      cors: true,
      open: true,
      host: 'drupalboilerplate.test',
      origin: 'http://drupalboilerplate.test',
      strictPort: true,
      proxy: {
        '/': {
          target: 'http://drupalboilerplate.test',
        },
      },
      hmr: true,
    },
  };
});
