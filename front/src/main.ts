import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/app.scss'
import './scss/form.scss'

import { worker } from '../mocks/browser'

// 載入使用的 icons
import './icons/dist/icons.css'

worker.start({
  serviceWorker: {
    url: `${process.env.BASE_URL}mockServiceWorker.js`
  }
}).then(console.log).catch(console.error)

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
