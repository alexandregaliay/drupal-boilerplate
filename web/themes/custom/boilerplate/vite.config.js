// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/web/themes/custom/boilerplate/dist',
    publicDir: '/web/themes/custom/boilerplate/dist',
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
      hmr: {
        host: 'drupalboilerplate.test',
      },
      proxy: {
        '/': {
          target: 'http://drupalboilerplate.test',
          changeOrigin: true,
        },
      },
    },
  };
});
