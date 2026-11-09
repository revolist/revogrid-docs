import { defineConfig } from 'vite';

export default defineConfig({
  // Serve the same build from a blog demo subdirectory or a standalone domain.
  base: './',
  resolve: { dedupe: ['react', 'react-dom'] },
});
