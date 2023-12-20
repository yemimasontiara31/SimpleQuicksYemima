// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontSize: {
          "2xl": ["1.5rem", { lineHeight: "2rem" }],
          "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
          "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      fontWeight: {
          "2xlBold": 900,
      },
      colors: {
          gray1: "#333333",
          gray2: "#4F4F4F",
          gray6: "#F2F2F2",
          menublue: "#2F80ED",
          inboxactive: "#8785FF",
          taskactive: "#F8B76B",
      },
  },
  },
  plugins: [],
};
