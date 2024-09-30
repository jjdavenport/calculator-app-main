/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        textThreeFiveXl: "2rem",
      },
      colors: {
        mainBgTheme1: "hsl(222, 26%, 31%)",
        toggleBgTheme1: "hsl(223, 31%, 20%)",
        screenBgTheme1: "hsl(224, 36%, 15%)",

        keyBgTheme1: "hsl(225, 21%, 49%)",
        keyShadowTheme1: "hsl(224, 28%, 35%)",

        redKeyBgTheme1: "hsl(6, 63%, 50%)",
        darkRedKeyShadowTheme1: "hsl(6, 70%, 34%)",

        lightGrayOrangeKeyBgTheme1: "hsl(30, 25%, 89%)",
        grayOrangeKeyShadowTheme1: "hsl(28, 16%, 65%)",

        textGrayBlueTheme1: "hsl(221, 14%, 31%)",
        whiteTextTheme1: "hsl(0, 0%, 100%)",

        mainBgTheme2: "hsl(0, 0%, 90%)",
        toggleBgTheme2: "hsl(0, 5%, 81%)",
        screenBgTheme2: "hsl(0, 0%, 93%)",

        keyBgTheme2: "hsl(185, 42%, 37%)",
        keyShadowTheme2: "hsl(185, 58%, 25%)",

        orangeKeyBgTheme2: "hsl(25, 98%, 40%)",
        darkOrangeKeyShadowTheme2: "hsl(25, 99%, 27%)",

        lightGrayYellowKeyBgTheme2: "hsl(45, 7%, 89%)",
        darkGrayOrangeKeyShadowTheme2: "hsl(35, 11%, 61%)",

        textGrayYellowTheme2: "hsl(60, 10%, 19%)",
        whiteTextTheme2: "hsl(0, 0%, 100%)",

        mainBgTheme3: "hsl(268, 75%, 9%)",
        toggleBgTheme3: "hsl(268, 71%, 12%)",
        screenBgTheme3: "hsl(268, 71%, 12%)",

        darkVioletKeyBgTheme3: "hsl(281, 89%, 26%)",
        vividMagentaKeyShadowTheme3: "hsl(285, 91%, 52%)",

        pureCyanKeyBgTheme3: "hsl(176, 100%, 44%)",
        softCyanKeyShadowTheme3: "hsl(177, 92%, 70%)",

        veryDarkVioletKeyBgTheme3: "hsl(268, 47%, 21%)",
        darkMagentaKeyShadowTheme3: "hsl(290, 70%, 36%)",

        textLightYellowTheme3: "hsl(52, 100%, 62%)",
        textVeryDarkBlueTheme3: "hsl(198, 20%, 13%)",
        whiteTextTheme3: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("one", `.one &`);
      addVariant("two", `.two &`);
      addVariant("three", `.three &`);
    },
  ],
};
