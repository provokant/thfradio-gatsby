const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      spacing: {
        "5xl": "4.25rem",
      },
    },
    colors: {
      thfBlue: "#1200FF",
      thfOrange: "#FF6314",
      thfDarkBlue: "#160949",
      black: "#171517",
      white: "#FAFAFA",
      transparent: "transparent",
      primary: {
        "100": "#c3d3ff",
        "200": "#90adfe",
        "300": "#6d92fa",
        "400": "#5980f4",
        "500": "#4e74ea",
        "600": "#4669dc",
        "700": "#405ecc",
        "800": "#3a52ba",
        "900": "#3448a8",
      },
      secondary: {
        "100": "#c3d3ff",
        "200": "#90adfe",
        "300": "#6d92fa",
        "400": "#5980f4",
        "500": "#4e74ea",
        "600": "#4669dc",
        "700": "#405ecc",
        "800": "#3a52ba",
        "900": "#3448a8",
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
      sans: ["Neue Machina", ...fontFamily.sans],
      mono: ["Space Mono", ...fontFamily.mono],
    },
    
    fontSize: {
      xs: "0.725rem",     // 14px
      sm: "1rem",         // 16px
      base: "1.125rem",   // 18px
      lg: "1.25rem",      // 20px
      xl: "1.625rem",     // 26px
      "2xl": "1.75rem",   // 28px
      "3xl": "2.125rem",  // 34px
      "4xl": "2.5rem",    // 40px
      "5xl": "3rem",      // 50px
    },
    opacity: {
      "0": "0",
      "20": "0.2",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "80": "0.8",
      "90": "0.9",
      "100": "1",
    },
    fontWeight: {
      light: "300",
      normal: "400", 
      medium: "500", 
      semibold: "600",
      bold: "600",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "4px",

    },
    borderRadius: {
      none: "0",
      sm: "0.375rem",     // 6px
      default: "0.5rem",  // 8px
      md: "0.625rem",     // 10px 
      lg: "0.75rem",      // 12px
      full: "9999px",
    },
    container: {
      center: true,
      padding: "2rem"
    },
  },
  variants: {
    textColor: ["hover"],
  },
  plugins: []
}
