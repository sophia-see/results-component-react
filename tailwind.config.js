/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-red',
    'text-blue',
    'text-green',
    'text-yellow',
    'bg-lightred',
    'bg-lightblue',
    'bg-lightgreen',
    'bg-lightyellow'
    // Add all possible `text-{color}` classes you use dynamically
  ],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      colors: {
        violet1: "#6943FF",
        violet2: "#2F2CE9",
        violet3: "hsla(256, 71%, 46%, 100%)",
        violet4: "hsla(241, 71%, 46%, 0%)",
        blue1: "#CAC9FF",
        navyblue: "#303B59",
        red: "#FF5555",
        lightred: "hsla(0, 100%, 67%, 5%)",
        yellow: "#FFB21E",
        lightyellow: "hsla(39, 100%, 56%, 5%)",
        green: "#00BB8F",
        lightgreen: "hsla(166, 100%, 37%, 5%)",
        blue: "#1125D6",
        lightblue: "hsla(234, 85%, 45%, 5%)",
        verylightblue: "#ECF2FF"
      },
    },
  },
  plugins: [],
}

