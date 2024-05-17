import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min':"320px",'max':"359px"},
        // 'mb': {'min':"376px", 'max':"767px"},
        // => @media (min-width: 640px) { ... }
        // => @media (min-width: 320px) { ... }
      },
      colors:{
        bgColor:'#09090b',
      }
    },
  },
  plugins: [],
} satisfies Config;

