/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


const vuetify = createVuetify({
  ssr: true,
})
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F7F5F5',
          'on-background': '#000000',
          surface: '#FFFFFF',
          'on-surface': '#000000',
          primary: '#FFFFFF',
          'on-primary': '#000000',
          secondary: '#FFFFFF',
          'on-secondary': '#000000',
          error: '#FF0000',
          'on-error': '#000000',
          info: '#42A5F5',
          'on-info': '#000000',
          success: '#66BB6A',
          'on-success': '#000000',
          warning: '#FFA726',
          'on-warning': '#000000',


          //Custom colors
          'mc-grey': '#F7F5F5',
          'mc-green':'#27742D',
          'mc-yellow':'#FFD700',
          'mc-red':'#DB1020',

        }
      },
      dark: {
        dark: true,
        colors: {
            background: '#000000',
            'on-background': '#FFFFFF',
            surface: '#000000',
            'on-surface': '#FFFFFF',
            primary: '#000000',
            'on-primary': '#FFFFFF',
            secondary: '#000000',
            'on-secondary': '#FFFFFF',
            error: '#EF5350',
            'on-error': '#FFFFFF',
            info: '#42A5F5',
            'on-info': '#FFFFFF',
            success: '#66BB6A',
            'on-success': '#FFFFFF',
            warning: '#FFA726',
            'on-warning': '#FFFFFF',
        }   
      },
    },
    defaultTheme: 'light'
  },
})

