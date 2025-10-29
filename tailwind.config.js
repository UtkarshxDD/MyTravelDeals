/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#00B4D8',
        accent: '#FFB703',
        background: '#F8FAFC',
        textPrimary: '#1E293B',
        textSecondary: '#64748B',
        success: '#06D6A0',
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["Inter", "Open Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        script: ["Pacifico", "Caveat", "cursive"],
      },
    },
  },
  plugins: [],
}

