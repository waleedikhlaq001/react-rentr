/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#F478BA", // Add your primary color here
				secondary: "#F8C0D9",
				black: "#0A0A0C",
			},
			fontFamily: {
				bagoss: ['"Bagoss Extended TRIAL"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
