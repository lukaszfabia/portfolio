import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dark-grad": "linear-gradient(135deg, #000000 0%, #0e0c28 30%, #402b63 50%, #694398 70%, #6c5fc7 100%) no-repeat fixed;"
      },
      backgroundColor: {
        "dark": "#030303",
        "navy": "#123458",
        "coffee": "#D4C9BE",
        "gray": "#F1EFEC"
      },
      gradientColorStops: {
        "coffee": "#D4C9BE",
        "gray": "#F1EFEC"
      },
      textColor: {
        "navy": "#123458"
      },
      ringColor: {
        "navy": "#123458"
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'source-serif': ['Source Sans 3', 'sans-serif'],
        'noto-serif': ['Noto Serif', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
