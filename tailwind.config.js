export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          placeholder: "#828282",
          light: "#37353D",
          background: "#242329",
          dark: "#191515",
        },
        text: {
          main: "#E3DDD3",
          "main-dark": "#CEC1AC",
          secondary: "#DEDEDE",
        },
        yellow: {
          DEFAULT: "#FF9E28",
        },
        red: {
          "main-light": "#BA2A14",
          "main-dark": "#8E0F0F",
          "secondary-light": "#521111",
          "secondary-dark": "#2E0606",
        },
      },
    },
  },
  plugins: [],
};
