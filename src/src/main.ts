import './assets/base.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')

import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyCZF1nFaSAoOHu9mJ0OzNSJQMdj0QuhEuE',
  authDomain: 'videoapp-fb7ce.firebaseapp.com',
  projectId: 'videoapp-fb7ce',
  storageBucket: 'videoapp-fb7ce.appspot.com',
  messagingSenderId: '605465824946',
  appId: '1:605465824946:web:e936e7298715cc48fac3ab',
  measurementId: 'G-44EVHRLB85'
}

initializeApp(firebaseConfig)
// const analyticsApp = getAnalytics(firebaseApp)
