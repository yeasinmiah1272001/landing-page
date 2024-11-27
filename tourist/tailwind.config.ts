import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#029D9D",
        yellowColor: "#FCC603",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
