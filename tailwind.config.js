/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors:{
        'services-bg': '#50180C',
        'services-text': '#CFCBCE'
      },
      spacing: {
        '480': '480px', // Add custom spacing for left, right, etc.
      },
      
      

      backgroundImage: {
        'linearColor': 'linear-gradient(270deg,#DF8908 10%,#B415FF 100%)',
        'linearColorHover': 'linear-gradient(267deg, #B923E1 .36%, #DA7C25 102.06%)',
        
        
      },
      transitionDuration: {
        '400': '400ms',
      },
      padding: {
        '18': '18px',  // Add custom padding of 30px
        '21': '21px'
      },
      margin: {
        '15p': '15%', // Custom margin class for 25% left and right margins
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'], // Adding 'Outfit' font with fallback
      },
      fontSize:{
        '66': '66px',
        '18': '18px',
        '42': '42px',
        '30': '30px',
        '20': '20px',
        '14': '14px',
        '16': '16px',
        '11': '11px',
        '27': '27px'
      },
      borderColor:{
        'bC': '#B415FF',
        'PH': '#FF00FF'
      },
      width:{
        '520': '550px',
        '100': '100%',
        '90': '90%',
        '75': '75%',
        '60':'60%',
        '50': '50%',
        '43': '43%',
        '40': '40%',
        '20':'20%',
        '200': '200px',
        '164': '164px',
        '2': '2px',
      },
      lineHeight:{
        '70': '70px'
      },
      backgroundColor:{
        'menuColor': '#1F0016',
        'input-bg': '#32323C',
      },
      height:{
        '420': '420px',
        '300': '300px',
        '270': '270px'
      },
      borderRadius:{
        '10': '10px',
        '31': '31px',
        '36': '36px',
      }
      
    },
  },

  plugins: [],

  corePlugins: {
    textFillColor: false, // Disable native text-fill-color
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(270deg, #DF8908 40%, #B415FF 90.25%);',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradientContact': {
          'background-image': 'linear-gradient(270deg, #DF8908 55%, #B415FF 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '@media (min-width: 1024px)': {
          '.text-gradientContact-lg': {
            'background-image': 'linear-gradient(270deg, #DF8908 56%, #B415FF 100%)',
          },
        },
      });
    }
    
    
  ],
}

