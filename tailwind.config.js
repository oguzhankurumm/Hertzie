const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './<custom directory>/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/scenes/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      background: colors.neutral,
      primary: {
        50: '#eef5ff',
        100: '#d8e7ff',
        200: '#bad4ff',
        300: '#8bbbff',
        400: '#5595ff',
        500: '#2d6dff',
        600: '#2152fa',
        700: '#0f34e6',
        800: '#132bba',
        900: '#162b92',
        950: '#121d59',
      },
      secondary: colors.emerald,
      accent: colors.amber,
      success: colors.emerald,
      info: colors.sky,
      warning: colors.orange,
      danger: colors.rose,
      disabled: colors.slate,
      purple: colors.purple,
      violet: colors.violet,
      yellow: {
        50: '#fbffe7',
        100: '#f3ffc1',
        200: '#ebff86',
        300: '#e8ff41',
        400: '#edff0d',
        500: '#faff00',
        600: '#d1c300',
        700: '#a68e02',
        800: '#896e0a',
        900: '#745a0f',
        950: '#443104',
      },
      indigo: colors.indigo,
    },

    extend: {
      screens: {
        // Chrome DevTools
        ms: '320px', // mobile small
        mm: '375px', // mobile medium
        ml: '425px', // mobile large
        t: '768px', // tablet
        ls: '1024px', // laptop small
        ll: '1440px', // laptop large
        '4k': '2560px', // 4k

        // Figma UI

        // 120 * 8 = 960
        // 20 * 9 = 180
        // 960 + 180 = 1140
        f8: '1140px', // grid columns 8

        // 120 * 4 = 480
        // 20 * 5 = 100
        // 480 + 100 = 580
        f4: '580px', // grid columns 4

        // 120 * 9 = 1080
        // 20 * 10 = 200
        // 1080 + 200 = 1280
        f9: '1280px', // grid columns 9

        // 120 * 12 = 1440
        // 20 * 13 = 260
        // 1440 + 260 = 1700
        f12: '1700px', // grid columns 12

        // Tailwind CSS
        sm: '640px', // small
        md: '768px', // medium
        lg: '1024px', // large
        xl: '1280px', // extra large
        '2xl': '1536px', // 2 extra large
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadein: 'fadein 0.2s linear 0s 1 forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },
      },
    },
  },
  plugins: [],
};
