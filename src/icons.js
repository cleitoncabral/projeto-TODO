import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import {faCalendarCheck, faCalendar, faCalendarAlt, faExclamation, faCaretSquareRight, faArrowRight} from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarCheck, faCalendar, faCalendarAlt, faExclamation, faCaretSquareRight, faArrowRight)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-layer-text', FontAwesomeLayersText)