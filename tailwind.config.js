const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '5xl': '4.25rem',
      },
    },
    colors: {
      black: '#00024D',
      white: '#FFFFFF',
      transparent: 'transparent',
      gray: {
        100: '#FBFBFB',
        200: '#F8F9FA',
        300: '#F7F9FA',
        400: '#E6E6E6',
        500: '#DBDBDB',
        600: '#C5C5C5',
        700: '#838383',
        800: '#636363',
        900: '#171514',
      },
      linen: {
        100: '#FFFDFC',
        200: '#FFFBF8',
        300: '#FFF8F4',
        400: '#FFF2EB',
        500: '#FFEDE3',
        600: '#E6D5CC',
        700: '#998E88',
        800: '#736B66',
        900: '#4D4744',
      },
      indigo: {
        100: '#F4F7FF',
        200: '#D6E1FF',
        300: '#C7D8FF',
        400: '#2A3384',
        500: '#1E266D',
        600: '#1B2262',
        700: '#121741',
        800: '#0E1131',
        900: '#090B21',
      },
      'blue': {
        100: '#E6E6FF',
        200: '#BFC1FF',
        300: '#999BFF',
        400: '#4D50FF',
        500: '#0005FF',
        600: '#0005E6',
        700: '#000399',
        800: '#000273',
        900: '#00024D',
      },
      red: {
        100: '#FFE6E6',
        200: '#FFBFBF',
        300: '#FF9999',
        400: '#FF4D4D',
        500: '#FF0000',
        600: '#E60000',
        700: '#990000',
        800: '#730000',
        900: '#4D0000',
      },
      watermelon: {
        100: '#FFEEF1',
        200: '#FFD5DD',
        300: '#FFBCC9',
        400: '#FF8AA0',
        500: '#FF5877',
        600: '#E64F6B',
        700: '#993547',
        800: '#732836',
        900: '#4D1A24',
      },
      'aquamarine': {
        100: '#E6FFFB',
        200: '#BFFFF5',
        300: '#99FFEE',
        400: '#4DFFE2',
        500: '#00FFD5',
        600: '#00E6C0',
        700: '#009980',
        800: '#007360',
        900: '#004D40',
      },
      'pink': {
        100: '#FFF0FC',
        200: '#FFD9F7',
        300: '#FFC2F3',
        400: '#FF94E9',
        500: '#FF66E0',
        600: '#E65CCA',
        700: '#993D86',
        800: '#732E65',
        900: '#4D1F43',
      },
      'violet': {
        100: '#F4E6FF',
        200: '#E4BFFF',
        300: '#D399FF',
        400: '#B24DFF',
        500: '#9100FF',
        600: '#8300E6',
        700: '#570099',
        800: '#410073',
        900: '#2C004D',
      },
      'magenta': {
        100: '#FFE7FD',
        200: '#FFC2FA',
        300: '#FF9DF7',
        400: '#FF54F0',
        500: '#FF0BEA',
        600: '#E60AD3',
        700: '#99078C',
        800: '#730569',
        900: '#4D0346',
      },
    },
    fontFamily: {
      sans: ['Source Sans Pro', ...fontFamily.sans],
      mono: fontFamily.mono
    },
    fontSize: {
      xs: '0.725rem',     // 14px
      sm: '1rem',         // 16px
      base: '1.125rem',   // 18px
      lg: '1.25rem',      // 20px
      xl: '1.625rem',     // 26px
      '2xl': '1.75rem',   // 28px
      '3xl': '2.125rem',  // 34px
      '4xl': '2.5rem',    // 40px
      '5xl': '3rem',      // 50px
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '80': '0.8',
      '100': '1',
    },
    fontWeight: {
      light: '300',
      normal: '400', 
      medium: '500', 
      bold: '700',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '3': '3px',
      '4': '4px',
    },
    borderRadius: {
      none: '0',
      sm: '0.375rem',     // 6px
      default: '0.5rem',  // 8px
      md: '0.625rem',     // 10px 
      lg: '0.75rem',      // 12px
      full: '9999px',
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },
  variants: {
    textColor: ['hover'],
  },
  plugins: []
}
