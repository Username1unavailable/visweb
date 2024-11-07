module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        'custom': '12px', // Add your desired blur radius here
      },
      colors: {
        customPink: '#FFB199',
        
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'drift': 'drift 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -30px) scale(1.1)' },
        }
      }
     
    },
  },
  plugins: [],
}