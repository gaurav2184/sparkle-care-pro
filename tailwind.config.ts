import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        sans: ['Manrope', "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-slow": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        "float-slow": { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(30px,-40px) scale(1.05)" }, "66%": { transform: "translate(-20px,30px) scale(0.95)" } },
        "mist-drift": { "0%": { transform: "translateX(-10%) translateY(0)", opacity: "0.4" }, "50%": { opacity: "0.7" }, "100%": { transform: "translateX(10%) translateY(-20px)", opacity: "0.4" } },
        "shield-pulse": { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.04)" } },
        "marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "marquee-fast": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s var(--transition-smooth) both",
        "fade-in-slow": "fade-in-slow 1.2s ease-out both",
        "scale-in": "scale-in 0.5s var(--transition-smooth) both",
        "float-slow": "float-slow 14s ease-in-out infinite",
        "mist-drift": "mist-drift 9s ease-in-out infinite",
        "shield-pulse": "shield-pulse 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-fast": "marquee-fast 18s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
