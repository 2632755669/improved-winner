/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,less}'],
  theme: {
    // 字体大小
    fontSize: {
      xs: ['10px'],
      sm: ['12px'],
      base: ['14px', { lineHeight: '16px' }],
      lg: ['16px', { lineHeight: '18px' }],
      xl: ['18px', { lineHeight: '20px' }],
      '2xl': ['20px', { lineHeight: '24px' }],
      '3xl': ['30px', { lineHeight: '30px' }],
      '4xl': ['40px', { lineHeight: '40px' }],
      '5xl': ['50px', { lineHeight: '1' }],
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
        42: 'rgba(255, 255, 255, 0.42)',
        72: 'rgba(255, 255, 255, 0.72)',
        84: 'rgba(255, 255, 255, 0.84)',

      },
      dark: {
        100: '#1F1F1F',
        200: '#2E2E2E',
        300: '#3d3d3d',
      },
      blue: {
        300: '#247BFF',
      },
    },
    extend: {
      width: {
        '400px': '400px',
        '424px': '424px',
        '70px': '70px',
      },
      height: {
        '3px': '3px',
        '94px': '94px',
        '70px': '70px',
        '225px': '225px',
      },
    },
  },
  plugins: [],
};
