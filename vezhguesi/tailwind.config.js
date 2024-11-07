/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all files in the src directory for JSX/TSX support
  ],
  theme: {
    extend: {
      boxShadow: {
        'b': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Adjust values as needed
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
