const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      spacing: {
        '5xl': '4.25rem',
      },
    },
    colors: {
      black: '#171517',
      white: '#FAFAFA',
      transparent: 'transparent',
      primary: {
        "100": "#e7fdef",
        "200": "#d2fbea",
        "300": "#b1f6e6",
        "400": "#83f0eb",
        "500": "#54d4e8",
        "600": "#2ca4dd",
        "700": "#136fcf",
        "800": "#053dbe",
        "900": "#0014ad"
      },
      secondary: {
        // "0": "#ffeeef",
        "100": "#fde7e9",
        "200": "#fbd2db",
        "300": "#f6b1c6",
        "400": "#f083ae",
        "500": "#e8549c",
        "600": "#dd2c93",
        "700": "#cf1392",
        "800": "#be0594",
        "900": "#ad0096"
      },
      gray: {
        "100": "#f6f5f5",
        "200": "#eeeced",
        "300": "#e2dfe0",
        "400": "#d1cbce",
        "500": "#b9b2b6",
        "600": "#9a9297",
        "700": "#736d72",
        "800": "#464245",
        "900": "#171517"
      },
    },
    fontFamily: {
      sans: ['Montserrat', ...fontFamily.sans],
      mono: ['Roboto Mono', ...fontFamily.mono]
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
