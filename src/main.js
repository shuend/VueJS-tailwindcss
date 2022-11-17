import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import './script.js'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
