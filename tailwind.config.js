/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx,css,less}'],
  theme: {
    // 字体大小
    fontSize: {
      xs: ['10px'],
      sm: ['12px'],
      base: ['14px'],
      lg: ['16px'],
      xl: ['18px'],
      '2xl': ['20px'],
      '3xl': ['30px'],
      '4xl': ['40px'],
      '5xl': ['50px'],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['70px', { lineHeight: '1' }],
      '8xl': ['80px', { lineHeight: '1' }],
      '9xl': ['90px', { lineHeight: '1' }],
      22: ['22px'],
      24: ['24px'],
      26: ['26px'],
      28: ['28px'],
      30: ['30px'],
      32: ['32px'],
      34: ['34px'],
    },
    colors: {
      white: {
        6: 'rgba(255, 255, 255, 0.06)',
        12: 'rgba(255, 255, 255, 0.12)',
        24: 'rgba(255, 255, 255, 0.24)',
        30: 'rgba(255, 255, 255, 0.3)',
        42: 'rgba(255, 255, 255, 0.42)',
        60: 'rgba(255, 255, 255, 0.6)',
        72: 'rgba(255, 255, 255, 0.72)',
        84: 'rgba(255, 255, 255, 0.84)',
        100: 'rgba(255, 255, 255)',

      },
      dark: {
        100: '#1F1F1F',
        '200.0': '#2E2E2E00',
        200.1: '#2E2E2E',
        300: '#3d3d3d',
      },
      blue: {
        300: '#247BFF',
      },
    },
    extend: {
      width: {
        '28px': '28px',
        '40px': '40px',
        '70px': '70px',
        '80px': '80px',
        '288px': '288px',
        '312px': '312px',
        '320px': '320px',
        '400px': '400px',
        '424px': '424px',
        '432px': '432px',
      },
      height: {
        '28px': '28px',
        '40px': '40px',
        '3px': '3px',
        '32px': '32px',
        '70px': '70px',
        '94px': '94px',
        '162px': '162px',
        '225px': '225px',
        '243px': '243px',
        '256px': '256px',
        '353px': '353px',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      lineHeight: {
        'leading-4.5': '1.125rem',
      },
      screens: {
        desktop1440: '1440px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
