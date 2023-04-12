import { createApp } from 'vue'
import { createPinia } from 'pinia'

//font-awesome-icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faSearch, faMap , faUser, faPlusCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';


import App from './App.vue'
import router from './router'

import './index.css'

const app = createApp(App)

//font-awesome-icons
library.add(faHouse)
library.add(faSearch)
library.add(faMap)
library.add(faUser)
library.add(faPlusCircle)
library.add(faUserPlus)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
