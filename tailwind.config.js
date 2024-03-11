/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E81B23",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
      backgroundImage: {
        videoOverlay: "radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 0, 0, 0.71) 13%, #000000 80%)",
        graphicbg: "radial-gradient(at center center,#e81b234a,#000000 45%)",
      },
    },
  },
  plugins: [],
};
