/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      textPrimary: '#8D493A',
      hoverColor: '#B85842',
    },
  },
};
export const plugins = [];
