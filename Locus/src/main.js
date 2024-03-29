import { createApp } from 'vue'
import { createPinia } from 'pinia'

//font-awesome-icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faSearch, faMap , faUser, faPlusCircle, faUserPlus, faXmark, faPhone, faBars, faThumbsUp, faLocationArrow, faComment, faUserMinus, faAngleLeft, faBell, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';


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
library.add(faXmark)
library.add(faBars)
library.add(faThumbsUp)
library.add(faLocationArrow)
library.add(faComment)
library.add(faUserMinus)
library.add(faAngleLeft)
library.add(faBell)
library.add(faMessage)
library.add(faPhone)
library.add(faPaperPlane)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
