/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    darkTheme: "black",
    themes: [
      {
        licolight: {
          "primary": "#F0555A",
          "secondary": "#2A96FA",
          "accent": "#2D3648",
          "neutral": "#2D3648",
          "base-100": "#FCF6EE",
          "base-content": "#1E1810",
          "info": "#4083FF",
          "success": "#70FF40",
          "warning": "#FFDF40",
          "error": "#FF4040",
          "--btn-text-case": "normalcase",
        },
        licodark: {
          "primary": "#2A96FA",
          "secondary": "#F0555A",
          "accent": "#FCF6EE",
          "neutral": "#FCF6EE",
          "base-100": "#101219",
          "info": "#4083FF",
          "success": "#70FF40",
          "warning": "#FFDF40",
          "error": "#FF4040",
          "--btn-text-case": "normalcase",
        }
      }
    ],
  },
}
