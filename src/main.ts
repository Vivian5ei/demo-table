import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VxeUIBase from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VxeUIBase)
app.use(VxeUITable)

app.mount('#app')
