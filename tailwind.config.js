/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '20px',
        xl: '20px',
      },
    },
    screens: {
      xs: { 'min': '320px', 'max': '576px' },
      sm: { 'min': '576px', 'max': '768px' },
      md: { 'min': '768px', 'max': '992px' },
      lg: { 'min': '992px', 'max': '1200px' },
      xl: { 'min': '1200px' },
    },
    extend: {
      backgroundImage: {
        homePossibilities:"url('/Rectangle 1611.png')",
        homeFacts:"url('/Group 2603.svg')",
        homeFooter:"url('/Group 2604.png')",
        moneyTRImg:"url('/Group 2605.svg')",
        paymentsHeader:"url('/paymentsHeader.svg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
