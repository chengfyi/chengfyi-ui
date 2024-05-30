import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/button.vue'
import MyDialog from './components/dialog.vue'
import './assets/fonts/iconfont.css'

const app = createApp(App)
app.component('cfy-button', MyButton)
app.component('cfy-dialog', MyDialog)

app.mount('#app')
