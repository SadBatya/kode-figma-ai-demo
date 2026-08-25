import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features/index.ts'),
      '@entities': path.resolve(__dirname, './src/entities/index.ts'),
      '@connectors': path.resolve(__dirname, './src/connectors/index.ts'),
      '@pages': path.resolve(__dirname, './src/pages/index.ts'),
      '@widgets': path.resolve(__dirname, './src/widgets/index.ts'),
      '@providers': path.resolve(__dirname, './src/providers/index.ts'),
      '@shared': path.resolve(__dirname, './src/shared/*'),
    },
  },
})
