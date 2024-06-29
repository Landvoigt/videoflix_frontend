module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-to': '#3a0b4f',
        'custom-from': '#000510',

        'default-to': '#320e4d',
        'default-from': '#000510',
      },
      colors: {
        defaultColor: 'rgb(29, 29, 29)',
        accentColor: '#7400c2',
        accentColorHover: '#aa42f0',
        
        textColorPrimary: 'rgba(240, 248, 255, 0.92)',
        textColorSecondary: 'rgba(240, 248, 255, 0.77)',
        textColorHover: 'rgb(207 135 255)',

        borderColorPopup: '#e3d9ffb8',

        inputColorFocus: '#2528eb',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}