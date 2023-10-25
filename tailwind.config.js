/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('https://res.cloudinary.com/dckqfwvh1/image/upload/v1697735262/rick-morty-characters_lzzakp.webp')",
      },
    },
  },
  plugins: [],
};
