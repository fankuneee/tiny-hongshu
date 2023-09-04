/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 09:45:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-09-04 17:14:19
 */
/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      // fontFamily: {
      //   sans: ['Helvetica', 'Arial', 'sans-serif']
      // },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
