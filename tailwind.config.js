/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#081020',
          secondary: '#11203D',
        },
        gold: {
          DEFAULT: '#C8A028',
          hover: '#B58F1F',
          soft: '#FEF9E7',
        },
        slatebg: '#F8FAFC',
        body: '#334155',
        muted: '#64748B',
        line: '#E2E8F0',
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
