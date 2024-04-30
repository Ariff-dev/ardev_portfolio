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
        backgroundColor: '#080808',
        box_backround_primary: '#0F0F0F',
        box_backround_secundary: '#000000',
        color_title: '#38B6FF',
        color_subtext: '#83858C',
        icon_color: '#38B6FF',
      },
    },
  },
  plugins: [],
}
export default config
