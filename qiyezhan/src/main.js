import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'pFW2Wn7NvwUoAGOaftGkUB6pMtHVaaDL'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
