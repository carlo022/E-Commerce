export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // indigo-600
        },
        accent: {
          DEFAULT: '#ec4899', // pink-500
        },
      },
    },
  },
  plugins: [],
}
