import Vue from 'vue'
import App from './App'
import router from './router'
import * as Sentry from '@sentry/vue'
import { Integrations } from "@sentry/tracing";

Sentry.init({
  Vue: Vue,
  tracingOptions: {
    trackComponents: true,
  },
  dsn: "https://1f91ba58ab884e0dbe236357ce72a5dd@o87286.ingest.sentry.io/5669173",
  integrations: [new Integrations.BrowserTracing()],
  environment: "dev",
  release: process.env.VUE_APP_RELEASE || "0.0.1",
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})