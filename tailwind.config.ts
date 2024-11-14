import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          darker: "var(--primary-darker)",
          dark: "var(--primary-dark)",
          base: "var(--primary-base)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
        },
        neutral: {
          0: "var(--neutral-0)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        others: {
          0: "var(--others-0)",
          100: "var(--others-100)",
          200: "var(--others-200)",
          300: "var(--others-300)",
          400: "var(--others-400)",
          500: "var(--others-500)",
          600: "var(--others-600)",
          700: "var(--others-700)",
          800: "var(--others-800)",
          900: "var(--others-900)",
        },
      },
      backdropBlur: {
        customBlur: "10.80px",
        customBlurHead: "10.35px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        customGray: "rgba(13, 12, 24, 0.55)",
        customGrayHead: "rgba(8, 10, 12, 0.05)",
        greenBase:"var(--green-base)",
        greenBaseOpacity:"var(--green-base-opacity)",
        grayButton: "rgba(146, 146, 255, 0.16)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          darker: "var(--primary-darker)",
          dark: "var(--primary-dark)",
          base: "var(--primary-base)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
        },
        neutral: {
          0: "var(--neutral-0)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
        },
        others: {
          0: "var(--others-0)",
          100: "var(--others-100)",
          200: "var(--others-200)",
          300: "var(--others-300)",
          400: "var(--others-400)",
          500: "var(--others-500)",
          600: "var(--others-600)",
          700: "var(--others-700)",
          800: "var(--others-800)",
          900: "var(--others-900)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "albert-sans": ["Albert Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
