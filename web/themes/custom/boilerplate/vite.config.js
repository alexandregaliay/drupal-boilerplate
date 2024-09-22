// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    build: {
      manifest: true,
      rollupOptions: {
        input: ['./src/js/main.js', './src/scss/main.scss'],
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },
    server: {
      host: 'drupalboilerplate.test',
      strictPort: true,
      open: true,
      proxy: {
        '/': 'http://drupalboilerplate.test',
      },
    },
  };
});
