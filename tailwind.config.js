/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        canvas: {
          light: '#FAFBFD',
          dark: '#0E1117',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#151A23',
        },
        subtle: {
          light: '#F1F4F9',
          dark: '#1C222E',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.06)',
        'soft-dark': '0 1px 2px rgba(0, 0, 0, 0.25), 0 12px 32px -4px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
