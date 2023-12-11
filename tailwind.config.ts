import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        burgerButtonColor: "#DCEFD8",
        mainText: "#173D33",
        secondaryText: "#828382",
        mainElementsColor: "#97D28B"
      },
      fontFamily: {
        title: ["var(--font-oswald)"],
        text: ["var(--font-fira)"]
      },
      screens: {
        mobile: "360px",
        tablet: "768px",
        desktop: "1280px"
      }
    }
  },
  plugins: []
};
export default config;
