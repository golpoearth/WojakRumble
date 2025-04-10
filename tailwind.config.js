/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7EB6',    // Pastel Pink
        secondary: '#7BFFA0',  // Pastel Green
        accent: '#FFF47D',     // Pastel Yellow
        dark: '#1A1A1A',       // Almost Black
        light: '#FAFAFA',      // Almost White
        neon: {
          pink: '#FF1B6B',
          green: '#45FFBC',
          blue: '#6FDFFF',
          yellow: '#FFE345',
        },
        pastel: {
          blue: '#7BB2FF',
          purple: '#9D94FF',
          green: '#94FFBC',
          pink: '#FF94B6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FF7EB6 0%, #7BFFA0 50%, #FFF47D 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        'button-gradient': 'linear-gradient(90deg, #FF1B6B 0%, #45FFBC 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 27, 107, 0.5)',
        'glow': '0 0 30px rgba(123, 255, 160, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropFilter: {
        'glass': 'blur(4px)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      blur: {
        'glass': '4px',
      },
    },
  },
  plugins: [],
} 