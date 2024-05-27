/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      'animation': {
        'gradient-x':'gradient-x 15s ease infinite',
        'gradient-y':'gradient-y 15s ease infinite',
        'gradient-xy':'gradient-xy 10s ease infinite',
        'typewriter': "typewriter 2s steps(11) forwards",
        'typing': "typing 4s steps(60) , blink .7s infinite",
        'float-slow': 'bounce 2s ease-out infinite',
        appearfade : 'appear 0.5s ease-in',
        fadeInSlow : 'fadeInSlow 0.7s ease-in',
        fadeOutSlow: 'fadeOutSlow 0.5s ease-in',
        appearfadeslow : 'appearSlow 1s ease-in',
    },
    'keyframes': {
        'gradient-y': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'center top'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'center center'
            }
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        'typewriter': {
          'to': {
            'left': "100%"
          }
        },
        'typing': {
          "0%": {
            'width': "0%",
            'visibility': "hidden"
          },
          "100%": {
            'width': "100%"
          }
        },
        'blink': {
          "50%": {
            'borderColor': "transparent"
          },
          "100%": {
            'borderColor': "white"
          }
        },
        appear: {
          '0%' : { transform: 'translate3d(0, 200px, 0)',
                    opacity: '0' },
          '100%' : { transform : 'translate3d(0, 0, 0)',
                    opacity: '90%' }
        },
        appearSlow: {
          '0%' : { transform: 'translate3d(0, 200px, 0)',
                   opacity: '0' },
          '75%' : { transform: 'translate3d(0, 200px, 0)',
                   opacity: '0' },
                
          '100%' : { transform : 'translate3d(0, 0, 0)',
                      opacity: '1' },
        },
        fadeInSlow: {
          '0%' : { opacity: '0' },
          '75%' : {opacity: '0.5' },
                
          '100%' : { opacity: '1' },
        },
        fadeOutSlow: {
          '0%' : { opacity: '1' },
          '75%' : {opacity: '0.5' },
                
          '100%' : { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}

