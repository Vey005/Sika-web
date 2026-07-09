/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sika: {
          gold: "#B8860B",
          goldDark: "#8A6500",
          goldSoft: "#FFF3D6",
          cream: "#FFF9EF",
          bg: "#FAFAF8",
          text: "#111827",
          textSoft: "#4B5563",
          muted: "#6B7280",
          border: "#E5E7EB",
          success: "#22C55E",
          successSoft: "#EAFBF1",
          danger: "#EF4444",
          dangerSoft: "#FEF2F2",
          blueSubtle: "#2563EB",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 24, 39, 0.08)",
        premium: "0 30px 90px rgba(17, 24, 39, 0.14)",
        lift: "0 16px 40px rgba(17, 24, 39, 0.10)",
      },
      borderRadius: {
        xl2: "1.5rem",
        xl3: "2rem",
      },
    },
  },
  plugins: [],
};
