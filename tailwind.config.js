/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'image': '100%', // 添加图像的宽度类名
      },
      height: {
        'image': 'auto', // 添加图像的高度类名
      },
      // fontFamily: {
      //   sans: ['Helvetica', 'Arial', 'sans-serif']
      // },
    },
  },
  plugins: [],
}
