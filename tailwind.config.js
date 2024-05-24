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
        'typing': "typing 2s steps(20) infinite, blink .7s infinite"
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
        }
      }
    },
  },
  plugins: [],
}

