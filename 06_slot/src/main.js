import { createApp } from 'vue'
import App from './App.vue'         // App.vue에서 script 부분에 export로 작성한 것들을 import해서 App으로 정의하여 사용

createApp(App).mount('#app')        // #app은 index.html에 있음
