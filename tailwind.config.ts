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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    plugins: [
      // Add the following plugin to include the Tailwind CSS styles
      require("@tailwindcss/forms"),
    ],
    styles: {
      // Add the Tailwind CSS styles directly here
      // Make sure to adjust the animation and other styles based on your needs
      movingText: {
        "@keyframes moveRight": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "whitespace-nowrap": { whiteSpace: "nowrap" },
        "text-base": { fontSize: "1.25rem" },
        "text-gray-800": { color: "#2d3748" },
        "moving-text": {
          animation: "moveRight 5s linear infinite",
          // Add other styles as needed
        },
      },
    },
  },
};

export default config;
