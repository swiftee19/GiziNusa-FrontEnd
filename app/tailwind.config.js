/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Nunito', 'ui-sans-serif', 'system-ui']
  		},
  		textColor: {
  			primary: '#605BFF',
  			secondary: '#C2C0F0',
  			alert: '#D11A2A',
  			gray: '#9A9AA9',
  			lightgray: '#ECEEF2',
  			boldgray: '#52525b',
  			lightblue: '#EBF8FE',
  			blue: '#36B5EC',
  			lightyellow: '#FAF1E5',
  			yellow: '#DA8207',
  			lightred: '#FDEAEA',
  			red: '#E22626',
  			lightgreen: '#EFFEF2',
  			green: '#5BEF76'
  		},
  		colors: {
			primary: '#605BFF',
			secondary: '#C2C0F0',
  			alert: '#D11A2A',
  			alertLight: '#FBE9EA',
  			gray: '#9A9AA9',
  			offwhite: '#FAFAFB',
  			lightgray: '#ECEEF2',
  			boldgray: '#52525b',
  			lightblue: '#EBF8FE',
  			blue: '#36B5EC',
  			lightyellow: '#FAF1E5',
  			yellow: '#DA8207',
  			lightred: '#FDEAEA',
  			red: '#E22626',
  			lightgreen: '#EFFEF2',
  			green: '#5BEF76',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			thinOverlay: 'rgba(0,0,0,0.3)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

