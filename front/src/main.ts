import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/app.scss'

// 載入使用的 icons
import './icons/dist/icons.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
