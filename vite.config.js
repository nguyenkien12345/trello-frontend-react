import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() // Hỗ trợ xử lý các file svg mà chúng ta import từ bên ngoài vào bên trong dự án
  ],
  base: './',
  // Cấu hình xử lý absolute, relative import
  resolve: {
    alias: [
      // Nó sẽ tìm đến những file mà chúng ta dùng dấu ~ và thay thế thành /src để sử dụng import file trông gọn gàng hơn thay vì cứ phải sử dụng ../
      { find: '~', replacement: '/src' }
    ]
  }
})
