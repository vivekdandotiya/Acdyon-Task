/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF9F5',
          alt: '#F4F3ED',
          card: '#FFFFFF',
          muted: '#F1F0EA',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          800: '#1B2A4A',
          900: '#0E1726',
          950: '#070C16',
        },
        acdyon: {
          blue: '#1D4ED8',
          blueHover: '#1E40AF',
          blueLight: '#EFF6FF',
          indigo: '#4F46E5',
          indigoLight: '#EEF2FF',
          accent: '#2563EB',
          accentBg: 'rgba(37, 99, 235, 0.05)',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#F1F5F9',
          strong: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'elevated': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 20px -3px rgba(37, 99, 235, 0.15)',
        'ai-glow': '0 0 25px -5px rgba(79, 70, 229, 0.18)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
