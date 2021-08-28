module.exports = {
	important: true,
	purge: {
		content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
		options: {
			safelist: [
				"w-1/2",
				"w-1/3",
				"w-1/4",
				"w-1/5",
				"w-1/6",
				"w-1/7",
				"w-1/8",
				"w-1/9",
				"w-1/10",
				"w-1/11",
				"w-12",
				"w-1/13",
				"w-1/14",
				"w-1/15"
			]
		}
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				112: "28rem"
			},
			boxShadow: { search: "0px 0.2rem 0.3rem rgb(0 0 0 / 8%) !important" },
			width: {
				"1/7": "14.2857143%",
				"1/8": "12.5%",
				"1/9": "11.1111111111%",
				"1/10": "10%",
				"1/11": "9.090909090%",
				"1/13": "7.692307692%",
				"1/14": "7.142857142%",
				"1/15": "6.666666666%"
			}
		},
		colors: {
			transparent: "transparent",
			white: "#ffffff",
			black: "#000000",
			primary: {
				50: "#ebf4f4",
				100: "#d7e9ea",
				150: "#c4dedf",
				200: "#b0d3d5",
				250: "#9bc8cb",
				300: "#87bdc1",
				350: "#72b2b7",
				400: "#5ba7ad",
				450: "#429da3",
				500: "#1e9299",
				550: "#208289",
				600: "#207378",
				650: "#206469",
				700: "#1e5659",
				750: "#1c474a",
				800: "#1a3a3c",
				850: "#162d2e",
				900: "#122021",
				950: "#0b1414"
			},
			secondary: {
				50: "#f2f2f2",
				100: "#e4e4e4",
				150: "#d7d7d7",
				200: "#cacaca",
				250: "#bdbebd",
				300: "#b1b1b1",
				350: "#a4a4a4",
				400: "#989898",
				450: "#8c8c8c",
				500: "#808080",
				550: "#727272",
				600: "#656565",
				650: "#585858",
				700: "#4c4c4c",
				750: "#3f3f3f",
				800: "#333333",
				850: "#282828",
				900: "#1d1d1d",
				950: "#121212"
			},
			info: {
				50: "#edf4f9",
				100: "#daeaf2",
				150: "#c8e0ec",
				200: "#b5d5e5",
				250: "#a2cbdf",
				300: "#8fc1d8",
				350: "#7ab7d2",
				400: "#64adcc",
				450: "#4aa3c5",
				500: "#2699bf",
				550: "#2789aa",
				600: "#267895",
				650: "#256981",
				700: "#23596e",
				750: "#204a5b",
				800: "#1d3c49",
				850: "#192e37",
				900: "#142127",
				950: "#0d1417"
			},
			success: {
				50: "#eff6ee",
				100: "#e0eddd",
				150: "#d0e4cc",
				200: "#c0dbbb",
				250: "#b1d2ab",
				300: "#a1c99a",
				350: "#91c08a",
				400: "#82b77a",
				450: "#72ae6b",
				500: "#61a55b",
				550: "#579352",
				600: "#4e8249",
				650: "#457140",
				700: "#3c6038",
				750: "#33502f",
				800: "#2a4027",
				850: "#21311f",
				900: "#192317",
				950: "#10150e"
			},
			warning: {
				50: "#fff2e7",
				100: "#ffe6d0",
				150: "#ffd9b9",
				200: "#ffcca2",
				250: "#ffc08b",
				300: "#ffb375",
				350: "#ffa65e",
				400: "#ff9a46",
				450: "#ff8d2c",
				500: "#fd8000",
				550: "#e17308",
				600: "#c6660d",
				650: "#ab5910",
				700: "#914c11",
				750: "#784012",
				800: "#603411",
				850: "#492810",
				900: "#331d0d",
				950: "#1e1207"
			},
			error: {
				50: "#ffebe7",
				100: "#ffd7d0",
				150: "#ffc3b9",
				200: "#feafa2",
				250: "#fb9b8c",
				300: "#f68777",
				350: "#f17162",
				400: "#ea5b4d",
				450: "#e2413a",
				500: "#da1d26",
				550: "#c21f23",
				600: "#ab1f20",
				650: "#951f1d",
				700: "#7f1e1a",
				750: "#6a1c17",
				800: "#551914",
				850: "#411611",
				900: "#2e120c",
				950: "#1d0b06"
			},
			neutral: {
				50: "#f2f2f2",
				100: "#e4e4e4",
				150: "#d7d7d7",
				200: "#cacaca",
				250: "#bdbebd",
				300: "#b1b1b1",
				350: "#a4a4a4",
				400: "#989898",
				450: "#8c8c8c",
				500: "#808080",
				550: "#727272",
				600: "#656565",
				650: "#585858",
				700: "#4c4c4c",
				750: "#3f3f3f",
				800: "#333333",
				850: "#282828",
				900: "#1d1d1d",
				950: "#121212"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms")],
	corePlugins: {
		outline: false
	}
};