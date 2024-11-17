/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        y2k: {
          pink: '#FF6B9E',      // Hot bubblegum pink
          babypink: '#FFA6C9',  // Baby pink
          lavender: '#E2A9F3',  // Soft lavender
          mint: '#B5EAD7',      // Mint green
          yellow: '#FFE66D',    // Pastel yellow
          blue: '#A7D7F7',      // Baby blue
          glitter: '#FFE5F7',   // Glitter pink base
        }
      },
      fontFamily: {
        bubblegum: ['Bubblegum Sans', 'cursive'],
        kawaii: ['Varela Round', 'sans-serif'],
        cute: ['Comic Sans MS', 'cursive'],
      },
      backgroundImage: {
        'glitter-gradient': 'linear-gradient(45deg, #FF6B9E, #FFA6C9, #FFE5F7)',
        'holographic': 'linear-gradient(135deg, #FF6B9E, #E2A9F3, #A7D7F7, #FFA6C9)',
      },
      animation: {
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'y2k': '3px 3px 0 rgba(0, 0, 0, 0.2)',
        'kawaii': '0 4px 20px rgba(255, 107, 158, 0.3)',
      },
    },
  },
  plugins: [],
} 