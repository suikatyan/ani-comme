import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  'theme': {
    'themes': {
      'light': {
        'primary': colors.deepPurple.darken1, // #673AB7
        'secondary': colors.deepPurple.lighten4, // #D1C4E9
        'accent': colors.green.lighten1 // #66BB6A
      }
    }
  }
})
