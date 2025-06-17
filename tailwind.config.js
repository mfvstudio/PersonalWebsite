/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        orbitron: 'Orbitron, sans-serif',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'forest',
    ],
  },
};
