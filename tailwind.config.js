/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1680px',
        subContainer: '1440px',
      },
      fontFamily: {
        DM_sans: ['DM Sans'],
        Nunito: ['Nunito'],
      },
      colors: {
        Blue: '#3661FC',
        Rectangle: '#708FFF',
        iconC: '#95ACFF',
        MenuC: '#1A1A1A',
        HoverC: '#FE681E',
        gray: '#6B6161',
        ofWhite: '#F4F4FF',
      },
      backgroundImage: {
        bannerPic: "url('/src/assets/bannerImage.png')",
        CartBG: "url('/src/assets/CartBG.png')",
      },
    },
  },
};

