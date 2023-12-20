/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
      './public/**/*.html',
      './src/**/*.{html,js,jsx,ts,tsx,vue}',
    ],
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
