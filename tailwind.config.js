/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseAccent: {
          50: '#FDF4F5',
          100: '#FCE7EA',
          200: '#FAD1D8',
          300: '#F5AAB8',
          400: '#EE7991',
          500: '#E14E70',
          600: '#C73356',  // Main rose/berry
          700: '#A72443',
          800: '#8C213B',
          900: '#772036',
        },
        // Alias berry → roseAccent for backward compat
        berry: {
          50: '#FDF4F5',
          100: '#FCE7EA',
          200: '#FAD1D8',
          300: '#F5AAB8',
          400: '#EE7991',
          500: '#E14E70',
          600: '#C73356',
          700: '#A72443',
          800: '#8C213B',
          900: '#772036',
        },
        surface: {
          bg: '#FFFFFF',
          card: '#FAFAF9',
          border: '#E7E5E4',
          subtle: '#F5F5F4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08)',
        'reel': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
