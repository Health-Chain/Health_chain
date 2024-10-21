/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{js,ts,jsx,tsx}', // For React or other JS frameworks
  ],
  theme: {
    extend: {},
  },
  plugins:[ 
  require('flowbite/plugin')
],
}


