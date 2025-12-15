/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {},
}
export const plugins = [
  require('@catppuccin/tailwindcss')({
    prefix: 'ctp', // so classes are like bg-ctp-mocha-base
    defaultFlavor: 'mocha',
  }),
]
