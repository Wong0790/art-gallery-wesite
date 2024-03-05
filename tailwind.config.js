/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D5966C",
        "almost-black": "#151515",
        "dark-grey": "#444444",
      },
      fontFamily: {
        heading: ["Big Shoulders Display", "sans-serif"],
        custom: ["Outfit", "sans-serif"],
      },
      lineHeight: {
        10: "5.5rem",
        9: "4.375rem",
        8: "4.065rem",
        7: "3.125rem",
        6: "2rem",
        5: "1.75rem",
        4: "1.5rem",
      },
      fontSize: {
        "7xl": "4.375rem",
        "5xl": "3.75rem",
        "3xl": "2rem",
        "2xl": "3.4375rem",
        xl: "1.375rem",
        lg: "1.25rem",
      },
      typography: {
        DEFAULT: {
          css: {
            "@layer base": {
              "font-synthesis": "none",
              "text-rendering": "optimizeLegibility",
              "-webkit-font-smoothing": "antialiased",
              "-moz-osx-font-smoothing": "grayscale",
            },
          },
        },
      },
      letterSpacing: {
        widest: ".2265em",
      },
      backgroundImage: {
        "hero-desktop": "url('/src/assets/desktop/image-hero@2x.jpg')",
        "hero-small": "url('/src/assets/desktop/image-hero.jpg')",
        "map-large": "url('/src/assets/desktop/image-map@2x.png')",
        "map-medium": "url('/src/assets/tablet/image-map@2x.png')",
        "map-small": "url('/src/assets/mobile/image-map@2x.png')",
      },
      width: {
        350: "21.875rem",
        170: "10.625rem",
        150: "9.375rem",
      },
      minHeight: {
        1000: "62.5rem",
        800: "50rem",
        600: "37.5rem",
        550: "34.375rem",
      },
      maxWidth: {
        540: "33.75rem",
        448: "28rem",
        430: "26.875rem",
        350: "21.75rem",
        280: "17.5rem",
      },
      margin: {
        "375px": "23.4375rem",
        "30px": "1.875rem",
      },
      gap: {
        30: "1.875rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  utilities: {
    ".h-calc": {
      height: "calc(100vh - 1098px)",
      "@screen sm": {
        height: "calc(100vh - 1140px)",
      },
      "@screen xl": {
        height: "calc(100vh - 1540px)",
      },
    },
  },
};
