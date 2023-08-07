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
        xs: '20px',
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
        homeHeader: "url('/Group 2601.svg')",
        homeHeaderXs: "url('/rectangle 221 (1).png')",
        homeUser: "url('/Group 2602.svg')",
        homeUserXs: "url('/Group 2642.svg')",
        homePossibilities: "url('/Rectangle 1611.png')",
        homePossibilitiesXs: "url('/Rectangle 1611 (1).png')",
        homeFacts: "url('/Vector 5 (1).png')",
        homeFactsXs: "url('/Group 2643.svg')",
        homeFooter: "url('/Group 2604.png')",
        homeFooterXs: "url('/Group 2550.png')",
        moneyTRImg: "url('/Group 2607.png')",
        paymentsHeader: "url('/paymentsHeader.svg')",
        visaHeader: "url('/visaHeader.png')",
        ucoinHeader: "url('/ucoin.svg')",
        myhomeHeader: "url('/Group 2605.png')",
        myHomeServices: "url('/Group 2606.svg')",
        myhomeServicesXs: "url('/myhomeImg.svg')",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
