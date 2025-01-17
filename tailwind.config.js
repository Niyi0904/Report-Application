/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    screens: {
      'xs': {'min': '200px', 'max': '639px'},
      
      'sm': {'min': '640px', 'max': '1006px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '1007px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}


