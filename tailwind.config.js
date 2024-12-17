/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.jsx',
    './src/components/Contact.jsx',
    './src/components/Home.jsx',
    './src/components/AboutMe.jsx',
    './src/components/Projects.jsx',
    './src/components/TechStack.jsx',
    './src/components/Footer.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf': ['"SF Pro Display"', 'sans-serif'],
        'snell': ['"Snell Roundhand"', 'cursive'],
        'chancery': ['"Apple Chancery"', 'cursive'],
        'pacifico': ['"Pacifico"', 'cursive'],
        'firaCode': ['Fira Code', 'monospace'],
      },
      fontWeight:{
        light: 300,
      },
      borderWidth:{
        "0.5":"0.5px"
      },
      screens:{
        "xs": "300px"
      },
      fontSize:{
        "xxs": "0.5rem",
        "xxxs": "0.4rem"
      },
      boxShadow:{
        "in": "inset 3px 3px 5px gray",
      },
      width:{
        "2/7":"23%",
      },
      height:{
        "98": "450px",
        "100": "500px",
        "110": "700px",
      },
    },
  },
  plugins: [],
}

