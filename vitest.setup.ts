// vitest.setup.ts
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config as testUtilsConfig } from '@vue/test-utils'

config.autoAddCss = false

library.add(faArrowDown, faArrowUp)

testUtilsConfig.global.components = {
  'font-awesome-icon': FontAwesomeIcon
}
