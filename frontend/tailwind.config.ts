import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        opacity: 'hsl(var(--background) / 0.7)',
        button: 'hsl(var(--button))',
        border: 'hsl(var(--border))',
        text: {
          primary: 'hsl(var(--text))',
          secondary: 'hsl(var(--text-secondary))',
        },
        card: {
          art: 'hsl(var(--card-art))',
          geo: 'hsl(var(--card-geo))',
          bio: 'hsl(var(--card-bio))',
          soc: 'hsl(var(--card-soc))',
        },
        note: {
          low: 'hsl(var(--low))',
          average: 'hsl(var(--average))',
          high: 'hsl(var(--high))',
        },
      },
    },
  },
  plugins: [],
}
export default config
