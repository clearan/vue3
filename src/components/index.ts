import Page from './Pagination/index.vue'
import Svg from './SvgIcon/index.vue'

const all = {
  Page,
  Svg,
}

export default {
  install(app) {
    console.log(123)

    Object.keys(all).forEach((key) => {
      app.component(key, all[key])
    })
  },
}
