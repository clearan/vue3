import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-expect-error tobe
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Comp from '@/components/index'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
import 'virtual:svg-icons-register'
app.use(Comp)

app.mount('#app')
console.log(import.meta.env)
