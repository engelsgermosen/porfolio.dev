/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {animation: {
			fadeIn: 'fadeIn 0.3s ease-in-out',
			fadeOut: 'fadeOut 0.5s ease-in-out',
		  },
		  keyframes: {
			fadeIn: {
			  '0%': { opacity: '0' },
			  '100%': { opacity: '1' },
			},
			fadeOut: {
			  '0%': { opacity: '1' },
			  '100%': { opacity: '0' },
		  }}},
	},
	plugins: [],
}
