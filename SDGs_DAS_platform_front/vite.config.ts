import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", 

  plugins: [vue()],
  server:{
    port:8031,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      "@c":resolve('src/components'),
      "@v":resolve('src/views'),
    }
  }
})
