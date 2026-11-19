/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: "#07182F",
        darkBlue: "#0B2344",
        electricBlue: "#1265D8",
        royalBlue: "#1D4ED8",
        iceBlue: "#DCEBFA",
        steelWhite: "#F5F8FC",
        metallicSilver: "#B9C6D4",
        steelBlack: "#101820",
        copper: "#B87333",
        amber: "#D4A853",
        warmCream: "#E8DCC8",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Inter", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3.5vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.005em', fontWeight: '600' }],
        'heading-xl': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-md': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '0', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.25', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'mono-sm': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'mono': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'mono-lg': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(18, 101, 216, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 101, 216, 0.03) 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(rgba(18, 101, 216, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18, 101, 216, 0.06) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(18, 101, 216, 0.15) 0%, transparent 60%)',
        'radial-glow-bottom': 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(18, 101, 216, 0.1) 0%, transparent 55%)',
        'industrial-gradient': 'linear-gradient(180deg, rgba(7, 24, 47, 0.95) 0%, rgba(11, 35, 68, 0.9) 40%, rgba(7, 24, 47, 0.98) 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(7, 24, 47, 1) 0%, rgba(11, 35, 68, 0.95) 35%, rgba(7, 24, 47, 1) 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(11, 35, 68, 0.9) 0%, rgba(7, 24, 47, 0.95) 100%)',
        'subtle-gradient': 'linear-gradient(180deg, rgba(11, 35, 68, 0.4) 0%, transparent 100%)',
        'accent-glow': 'radial-gradient(circle at center, rgba(18, 101, 216, 0.08) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid-24': '24px 24px',
        'grid-32': '32px 32px',
        'grid-48': '48px 48px',
      },
      boxShadow: {
        'card': '0 8px 32px -8px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(18, 101, 216, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)',
        'card-hover': '0 16px 48px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(18, 101, 216, 0.2), 0 0 32px rgba(18, 101, 216, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'card-strong': '0 20px 60px -16px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(18, 101, 216, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
        'glow': '0 0 40px -10px rgba(18, 101, 216, 0.3), 0 0 80px -20px rgba(18, 101, 216, 0.15)',
        'glow-strong': '0 0 60px -10px rgba(18, 101, 216, 0.4), 0 0 120px -20px rgba(18, 101, 216, 0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.25rem',
        'card-xl': '1.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    }
  },
  plugins: []
};
