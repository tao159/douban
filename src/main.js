// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
        attempt: 1,
        loading: require('common/images/lazy.png'),

    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})