/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#dbeafe',
          DEFAULT: '#3b82f6',
          dark: '#1e3a8a',
        },
        gray: {
          light: '#f3f4f6',
          DEFAULT: '#6b7280',
          dark: '#374151',
        },
      },
    },
  },
  plugins: [],
};
