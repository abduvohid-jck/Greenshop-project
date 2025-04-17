/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 20px 0px #0000000F",
      },
      fontFamily: {
        inter: "inter",
        interBold: "interBold",
      },
    },
    container: {
      center: true,
      width: {
        DEFAULT: "100%",
        desktop: "1200px",
      },
      padding: {
        DEFAULT: "16px",
        desktop: "0px",
      },
    },
    screens: {
      desktop: "1216px",
    },
  },
  plugins: [],
};
