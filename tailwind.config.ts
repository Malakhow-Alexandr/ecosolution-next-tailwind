import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        burgerButtonColor: "#DCEFD8",
        mainText: "#173D33",
        secondaryText: "#828382",
        mainElementsColor: "#97D28B",
      },
      fontFamily:{
        title:"Oswald",
        text:"Fira Sans"
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
