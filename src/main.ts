import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ViewUiPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css';

const app = createApp(App)

app.use(router)
    .use(ViewUiPlus)
    .mount('#app')
