import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronRight,faBars, faMoon, faSun, faCircleXmark, faArrowRight, faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faCss3, faFigma, faNodeJs, faPython, faReact, faHtml5, faJs, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faChevronDown, faChevronRight, faCircleDot, faArrowRight, faCircleXmark, faBars, faMoon, faSun, faCss3, faFigma, faNodeJs, faPython, faReact, faHtml5, faJs, faGithub, faLinkedin)



export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
