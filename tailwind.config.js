/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxl: "4.209rem",
        xl: "3.157rem",
        l: "2.369rem",
        m: "1.777rem",
        s: "1.333rem",
        paragraph: "1rem",
      },
      colors: {
        pageBackground: "#EEEEEE",
        blueNormal: "#00ADb5",
        blueLight: "#00e6f1",
        blueLighter: "#00fdff",
        blueSoft: "#BFE5F2",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
    },
  },
  plugins: [],
};
