// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Agora referenciamos as variáveis CSS que criamos
        gray: {
          placeholder: 'var(--color-gray-placeholder)',
          light: 'var(--color-gray-light)',
          background: 'var(--color-gray-background)',
          dark: 'var(--color-gray-dark)',
        },
        text: {
          main: 'var(--color-text-main)',
          'main-dark': 'var(--color-text-main-dark)',
          secondary: 'var(--color-text-secondary)',
        },
        // Para o amarelo, podemos usar a variável diretamente
        yellow: 'var(--color-yellow)',
        red: {
          'main-light': 'var(--color-red-main-light)',
          'main-dark': 'var(--color-red-main-dark)',
          'secondary-light': 'var(--color-red-secondary-light)',
          'secondary-dark': 'var(--color-red-secondary-dark)',
        }
      },
    },
  },
  plugins: [],
};