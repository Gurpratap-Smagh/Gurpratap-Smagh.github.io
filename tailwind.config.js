/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081020',
        'navy-card': 'rgba(17, 32, 61, 0.65)',
        gold: {
          DEFAULT: '#C8A028',
          hover: '#E2B93B',
          badge: '#E5C158',
        },
        ink: '#F3F6FA',
        muted: '#94A3B8',
        tagtext: '#CBD5E1',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
