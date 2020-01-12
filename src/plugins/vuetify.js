import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css';

const colors = require('vuetify/es5/util/colors').default;


Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#3700ff',
        accent: colors.blueGrey,
        secondary: colors.blueGrey.darken3,
        info: colors.teal.darken1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.darken1,
      },
    },
  },
});
