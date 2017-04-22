import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueResource from 'vue-resource'
import home from './store/home'

// vuex
import Vuex from 'vuex'


//muse-ui 主题
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'

// 工具类 和全局配置
import util from './util/util'
import config from './config/config'

Vue.prototype.conf = config

Vue.use(VueResource)
Vue.use(MuseUI)
Vue.use(util)
Vue.use(Vuex)


Vue.config.productionTip = false
Vue.http.options.emulateJSON = true


const store = new Vuex.Store({
    modules: {
        home: home
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
