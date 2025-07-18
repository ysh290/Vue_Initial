import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入svg需要用的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //解决前端请求后端接口的跨域问题
  server: {
    proxy: {
      '/api': {
        // 目标服务器地址，这里是本地的另一个服务，运行在端口8080上
        target: 'http://127.0.0.1:8080',
        // 是否改变请求的源（Origin），设置为true时，会将请求的源修改为目标服务器的源
        changeOrigin: true,
        // 路径重写规则，将以/api开头的路径替换为空字符串
        // 例如，请求/api/users会被转发到目标服务器的/users路径
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variable.scss" as *;`,
      },
    },
  },
})
