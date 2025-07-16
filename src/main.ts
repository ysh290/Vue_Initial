import App from './App.vue'
import { createApp } from 'vue'
//使用pinia管理公共数据
import { createPinia } from 'pinia'

import router from './router'
//引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导如svg依赖插件
import 'virtual:svg-icons-register'
//把 index.scss 里写的所有样式一次性注入到整个应用，实现“全局样式”
//import './styles/index.scss' 相当于“一键开关”：
// 项目启动（npm run dev）后，编译器会把 index.scss 里所有全局样式一次性注入到最终生成的 CSS，从而立即对整个应用生效。
import './styles/index.scss'
//获取应用的实例对象
const app = createApp(App)
//使用pinia
app.use(createPinia())
//使用路由
app.use(router)
//使用ElementPlus,它提供了很多全局UI组件库
app.use(ElementPlus)

import SvgIcon from '@/components/SvgIcon/index.vue'
//将你所需要用的svg组件变成全局组件，这样就不用再引入，可直接在其他组件中使用
app.component('SvgIcon', SvgIcon)

//挂载到#app元素上
app.mount('#app')
