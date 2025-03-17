module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",  // Make sure this matches your directory structure
    ],
    theme: {
        extend: {
          screens: {
            sm: '480px',
            md: '768px',
            lg: '1020px',
            xl: '1440px',
          },
        },
      },
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('tailwindcss-animate'),
    ],
  };
  