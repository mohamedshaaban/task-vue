module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      colors:{ 
        "main": "#fbac1a",
        "dark": "#243840",
        "white-blue": "#F0F1F7",
        "main-gray": "#DADBE6",
        "main-white": "#ffffff",
        "dark-gray": "#9597A6",
        "dark-text": "#4D4F5C",
        "input": "#E1E1E5",
        "placeholder": "#C9C9C8",
        "title": "#9597A6",
        "border": "#707070", 
        "alt": "#545871",
        "main-red": "#F2472C",
        "status-red": "#FBE5D6",
        "status-red-light": "#ffdfca",
        "status-yellow": "#FFF2CD",
        "status-yellow-light": "#fbeabb",
        "status-blue": "#DEEAF6",
        "status-blue-light": "#cee0f3",
        "status-green": "#E2F0D9",
        "status-green-light": "#dcf0cf"
      },
      borderRadius:{
        "main": "5px",
        "long": "15px"
      },
      dropShadow: {
        "layout": "0 0 10px #545871",
        "light": "0 3px 6px rgba(0,0,0,.16)"
      },
      backgroundImage: {
        'trash-pattern': "url('@/assets/icons/interface.svg')",
      },
      screens: {
        'tablet': '320px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}