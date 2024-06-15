import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

Vue.config.productionTip = false

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific solid icons */
import { faSatelliteDish, faWallet, faPercent, faComment, faListCheck, faBagShopping, faMagnifyingGlass, faChevronRight, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

/* import specific regular icons */
import { faUser, faHeart, faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* import specific brand icons */
import { faFacebookF, faTwitter, faYoutube, faPinterestP, faSkype } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faSatelliteDish, faWallet, faPercent, faComment, faListCheck, faUser, faHeart, faBagShopping, faMagnifyingGlass, faFacebookF, faTwitter, faYoutube, faPinterestP, faSkype,faChevronRight, faChevronLeft, faPlus, faEnvelope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
