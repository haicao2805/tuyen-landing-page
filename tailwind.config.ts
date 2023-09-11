import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   backgroundImage: {
    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    "gradient-conic":
     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
   },
   screens: {
    appXl: "1440px",
    appLg: "1280px",
    appMd: "768px",
    appSm: "320px",
   },
   spacing: {
    appXl: "1440px",
    appLg: "1280px",
    appMd: "768px",
    appSm: "320px",
   },
   width: {
    "1440": "1440px",
    "1280": "1280px",
    "768": "768px",
    "320": "320px",
   },
   fontFamily: {
    philosopher: ["Philosopher"],
    montserrat: ["Montserrat"],
   },
  },
 },
 plugins: [],
};
export default config;
