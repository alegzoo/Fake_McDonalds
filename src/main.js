/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import "@/styles/main.scss"

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  components: {
    SenderComponent,
    ReceiverComponent
  }
});