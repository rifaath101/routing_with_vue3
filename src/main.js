import router from './router.js';
import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

app.use(router); /* Activates the router*/

app.mount('#app');
