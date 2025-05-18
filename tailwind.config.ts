import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					cyan: "#00FFFF",
					green: "#00FF7F",
					pink: "#f014fe",
					purple: "#8A2BE2",
					yellow: "#FFD700",
					red: "#FF0000",
					orange: "#FFA500"
				}
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" },
				},
				"typewriter": {
					to: { width: "100%" },
				},
				"blink": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						opacity: "0.7",
						filter: "brightness(1) drop-shadow(0 0 5px currentColor)" 
					},
					"50%": { 
						opacity: "1",
						filter: "brightness(1.3) drop-shadow(0 0 10px currentColor)" 
					},
				},
				"rotate-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				"flow-right": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"slide-up": {
					"0%": { transform: "translateY(20px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-right": {
					"0%": { transform: "translateX(-20px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" },
				},
				"grow-width": {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
				"rotate-in": {
					"0%": { transform: "rotate(-10deg) scale(0.95)", opacity: "0" },
					"100%": { transform: "rotate(0) scale(1)", opacity: "1" },
				},
				"scroll-y": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-50%)" },
				},
				"scroll-x": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"typewriter": "typewriter 2.5s steps(40) 1s forwards",
				"blink": "blink 1s step-end infinite",
				"float": "float 3s ease-in-out infinite",
				"pulse-glow": "pulse-glow 2s ease-in-out infinite",
				"rotate-slow": "rotate-slow 8s linear infinite",
				"flow-right": "flow-right 2s linear infinite",
				"scale-in": "scale-in 0.5s ease-out forwards",
				"slide-up": "slide-up 0.5s ease-out forwards",
				"slide-right": "slide-right 0.5s ease-out forwards",
				"grow-width": "grow-width 1.5s ease-out forwards",
				"rotate-in": "rotate-in 0.5s ease-out forwards",
				"scroll-y": "scroll-y 10s linear infinite",
				"scroll-x": "scroll-x 15s linear infinite",
			},
			transitionProperty: {
				'height': 'height',
				'width': 'width',
			},
			transitionDuration: {
				'10000': '10000ms'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
