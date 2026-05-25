module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        nebula: '#0f172a',
        glow: '#7c3aed',
        electric: '#38bdf8',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(99, 102, 241, 0.24), transparent 25%), radial-gradient(circle at 20% 75%, rgba(56, 189, 248, 0.16), transparent 17%)',
      },
    },
  },
  plugins: [],
};
