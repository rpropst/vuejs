// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import App from './App'
import router from './router'
import * as Sentry from '@sentry/vue'

Sentry.init({
  Vue: Vue,
  dsn: "https://1f91ba58ab884e0dbe236357ce72a5dd@o87286.ingest.sentry.io/5669173",
});

new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})