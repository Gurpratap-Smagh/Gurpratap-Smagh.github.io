/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#090C11',
        panel: '#111620',
        elevated: '#161D2B',
        hairline: '#1E293B',
        teal: {
          forensic: '#249996',
          bright: '#2DD4BF',
        },
        gold: {
          humber: '#E5A823',
          bright: '#F0B429',
        },
        signal: {
          orange: '#F97316',
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
}
