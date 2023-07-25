import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error tobe
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Comp from '@/components/index'
import '@/styles/index.scss'
import router from './router'
// import axios from 'axios'

// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '111111',
//   },
// })

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
import 'virtual:svg-icons-register'
app.use(Comp)
app.use(router)
app.mount('#app')
console.log(import.meta.env)
