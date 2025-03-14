import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(fas, faDiscord, faInstagram, faTiktok, faYoutube)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
