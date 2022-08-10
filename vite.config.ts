import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 使用 alias 配置可以将文件打包的识别路径用别名进行替换，避免在文件引入别的组件的时候使用很长的相对路径
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://uniapibackend-1.stratus.qa.ebay.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  plugins: [react()]
})
