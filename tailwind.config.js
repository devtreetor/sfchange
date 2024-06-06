/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html}',	
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px', 'min': '1280px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px', 'min': '1024px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px', 'min': '768px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px', 'min': '640px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px', 'min': '0px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    
  ],
}

