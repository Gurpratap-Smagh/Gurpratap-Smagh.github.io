/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F0E8',
        surface: '#FAF8F3',
        sand: '#EAE4D6',
        rule: '#D4CCB9',
        ink: '#171614',
        muted: '#57534A',
        forest: {
          DEFAULT: '#1B4D3E',
          bright: '#143A2E',
          soft: '#E3EFEA',
        },
        rust: {
          DEFAULT: '#B84422',
          bright: '#963519',
          soft: '#F9EAE4',
        },
        cobalt: {
          DEFAULT: '#1E40AF',
          bright: '#1E3A8A',
          soft: '#E8EEF9',
        },
        ochre: {
          DEFAULT: '#A16207',
          bright: '#854D0E',
          soft: '#FEF3C7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
