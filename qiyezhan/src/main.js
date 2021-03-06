import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'pFW2Wn7NvwUoAGOaftGkUB6pMtHVaaDL'
})
Vue.use(ElementUI)
Vue.config.productionTip = false
// Vue.config.productionTip = false;
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV)//开发环境development，生产环境 production
console.log(process.env.VUE_APP_SERVICE_URL)
console.log(process.env.VUE_APP_BASE_API)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
