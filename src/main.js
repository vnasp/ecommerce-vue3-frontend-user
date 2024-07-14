import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific solid icons */
import { faSatelliteDish, faWallet, faPercent, faComment, faListCheck, faBagShopping, faMagnifyingGlass, faChevronRight, faChevronLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

/* import specific regular icons */
import { faUser, faHeart, faEnvelope, faStar } from '@fortawesome/free-regular-svg-icons'

/* import specific brand icons */
import { faFacebookF, faTwitter, faYoutube, faPinterestP, faSkype } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faSatelliteDish, faWallet, faPercent, faComment, faListCheck, faUser, faHeart, faBagShopping, faMagnifyingGlass, faFacebookF, faTwitter, faYoutube, faPinterestP, faSkype,faChevronRight, faChevronLeft, faPlus, faEnvelope, faStar, faMinus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
