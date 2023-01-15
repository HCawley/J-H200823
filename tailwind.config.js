/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blush': '#fef2f2',
      'plum': '#784E4E',
      'neutral': '#fafafa',
      'pale-rose': '#fccec0',
      'pale-tang': '#ffedd5',
      'dark-grey': '#4b5563'
    },
  },
  plugins: [],
}
