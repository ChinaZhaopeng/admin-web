import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ViewUIPlus from 'view-ui-plus'
import 'element-plus/dist/index.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

createApp(App).use(ElementPlus).use(ViewUIPlus).mount('#app')
