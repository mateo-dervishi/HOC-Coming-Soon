import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#F8F7F5",
        "warm-grey": "#8A8A8A",
        "light-grey": "#E8E8E8",
        "primary-black": "#0A0A0A",
        "soft-black": "#1A1A1A",
        "charcoal": "#2D2D2D",
        "accent-gold": "#C9A962",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
        wider: '0.2em',
      },
    },
  },
  plugins: [],
};

export default config;
