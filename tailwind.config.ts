import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          sm: "2rem",
          md: "8rem",
          lg: "9rem",
          xl: "7rem",
        },
      },
      cherry: {
  50: '#fdf2f2',
  100: '#fde8e8',
  200: '#fbd5d5',
  300: '#f8b4b4',
  400: '#f98080',
  500: '#f05252',
  600: '#e02424',
  700: '#c81e1e',
  800: '#9b1c1c',
  900: '#771d1d',
},
    },
  },
  plugins: [],
};

export default config;
