/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 09:45:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-06-28 21:28:55
 */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tiny-hongshu',
  description: '红薯',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'min-h-screen mx-auto bg-gradient-to-br from-indigo-500 to-pink-500'}>
        <div className="z-[1000] fixed flex-none top-0 left-0 right-0 text-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <a href="#" className="text-xl font-bold">Logo</a>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
                <li><a href="#" className="hover:text-gray-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
