const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      spacing: {
        "5xl": "4.25rem",
      },
    },
    colors: {
      // black: "#0e1745",
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
        "900": "#3448a8"
        // "100": "#b7e3ff",
        // "200": "#a7dbff",
        // "300": "#93cdff",
        // "400": "#7bb5f8",
        // "500": "#5280c3",
        // "600": "#3a60a9",
        // "700": "#2b4ba5",
        // "800": "#1a35a8",
        // "900": "#0014ad"
        // "100": "#e7fdef",
        // "200": "#d2fbea",
        // "300": "#b1f6e6",
        // "400": "#83f0eb",
        // "500": "#54d4e8",
        // "600": "#2ca4dd",
        // "700": "#136fcf",
        // "800": "#053dbe",
        // "900": "#0014ad"
      },
      secondary: {
        "100": "#ffe092",
        "200": "#fece59",
        "300": "#fabe32",
        "400": "#f4b01e",
        "500": "#eaa115",
        "600": "#dc9010",
        "700": "#cc7d0d",
        "800": "#ba690c",
        "900": "#a8560a"

        // "100": "#fbda96",
        // "200": "#f8cc76",
        // "300": "#f1c164",
        // "400": "#e7b559",
        // "500": "#d9a851",
        // "600": "#c8994a",
        // "700": "#b68943",
        // "800": "#a37a3c",
        // "900": "#916b35"

        // "100": "#fcb1ea",
        // "200": "#f58fde",
        // "300": "#eb70d2",
        // "400": "#dd57c6",
        // "500": "#ca43b8",
        // "600": "#b132a7",
        // "700": "#91248f",
        // "800": "#67196c",
        // "900": "#3f0f45"
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
      sans: ["Montserrat", ...fontFamily.sans],
      mono: ["Roboto Mono", ...fontFamily.mono]
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
      bold: "700",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
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
