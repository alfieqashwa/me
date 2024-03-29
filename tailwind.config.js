const colors = require('tailwindcss/colors')

module.exports = {
  // corePlugins: {
  //   // ...
  //   listStyleType: false,
  // },
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'current',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    extend: {
      fontFamily: {
        primary: ['Futura PT Book', 'sans-serif'],
        secondary: ['Futura PT Demi', 'sans-serif'],
      },
      colors: {
        defaultColor: '#1D2128',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.pink.500'),
            },
            p: {
              color: theme('colors.amber.100'),
            },
            time: {
              color: theme('colors.amber.300'),
            },
            // span: {
            //   color: theme('colors.amber.300'),
            // },
            table: {
              thead: {
                'th:first-child': {
                  paddingLeft: '.75rem',
                },
                'th:last-child': {
                  paddingRight: '.75rem',
                },
                th: {
                  textAlign: 'left',
                },
              },
              tbody: {
                'td:first-child': {
                  paddingLeft: '.75rem',
                },
                'td:last-child': {
                  paddingRight: '.75rem',
                },
                td: {
                  textAlign: 'left',
                },
              },
            },
            // table: { padding: '16px' },
            // 'ul > li:before': {
            //   background: theme('colors.amber.200'),
            //   borderRadius: '0%',
            // },
            // 'ol > li:before': {
            //   color: theme('colors.amber.200'),
            // },
            // li: {
            //   color: theme('colors.amber.200'),
            // },
            // blockquote: {
            //   borderLeftColor: theme('colors.pink.500'),
            // fontSize: '1.75rem',
            // },
            // 'blockquote > p': {
            //   color: theme('colors.amber.200'),
            // },
            // strong: {
            //   color: theme('colors.amber.200'),
            // },
            // em: {
            //   color: theme('colors.amber.200'),
            // },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
