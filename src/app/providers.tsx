/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-09-04 17:14:31
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-09-04 18:11:39
 */
'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="h-full w-full">
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}