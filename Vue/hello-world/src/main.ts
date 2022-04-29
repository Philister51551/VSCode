import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// createApp.prototype.msgTest = function msgTest() {
//     this.alert("666")
// }

createApp(App).use(store).use(router).mount('#app')
