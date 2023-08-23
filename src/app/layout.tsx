/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 09:45:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-23 09:54:48
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
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body className={'min-h-screen mx-auto bg-gradient-to-br from-indigo-500 to-pink-500'}>
        <div className="z-[1000] fixed flex-none top-0 left-0 right-0 text-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold">LOGS FU</a>
              <ul className="flex space-x-4">
                <li><a href="/travel" className="hover:text-gray-300">Travel</a></li>
                <li><a href="/travel" className="hover:text-gray-300">Travel</a></li>
                <li><a href="/travel" className="hover:text-gray-300">Travel</a></li>
                <li><a href="/travel" className="hover:text-gray-300">Travel</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pt-16 h-full absolute w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
