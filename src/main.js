import { createApp } from "vue";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

library.add(faStar, faStarEmpty)

import App from "./App.vue";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
