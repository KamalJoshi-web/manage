/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      BrightRed: "hsl(12, 88%, 59%)",
      DarkBlue: "hsl(228, 39%, 23%)",
      DarkGrayishBlue: "hsl(227, 12%, 61%)",
      VeryDarkBlue: "hsl(233, 12%, 13%)",
      VeryPaleRed: "hsl(13, 100%, 96%)",
      VaryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0,0%,100%)",
    },
    fontFamily: {
      BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "0px 195px 250px hsl(233, 12%, 13%)",
      },
      content: {
        tabletPattern: 'url("/src/assets/bg-tablet-pattern.svg")',
        promotionBannerDesktop:
          'url("/src/assets/bg-simplify-section-desktop.svg")',
        promotionBannerMobile:
          'url("/src/assets/bg-simplify-section-mobile.svg")',
      },
    },
  },
  plugins: [],
};
