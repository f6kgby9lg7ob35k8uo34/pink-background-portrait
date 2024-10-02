/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#FF6AD5',
          blue: '#C774E8',
          purple: '#AD8CFF',
          green: '#8CFFDA',
        },
      },
      animation: {
        "gradient-fade": "gradient-fade 5s ease infinite",
      },
      keyframes: {
        "gradient-fade": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};