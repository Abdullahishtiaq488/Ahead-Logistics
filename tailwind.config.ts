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
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				slideInRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				fadeOut: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},

			},

			animation: {
				slideInRight: 'slideInRight 3s ease-out',
				slideInLeft: 'slideInLeft 3s ease-out',
				fadeOut: 'fadeOut 3s ease-out',

			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
