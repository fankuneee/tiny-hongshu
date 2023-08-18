/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-18 10:36:37
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-18 12:06:42
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const arr = new Array(5).fill(0)
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/5 h-full pt-12 pb-12 shrink-0 flex flex-col items-end">
        <div className="w-3/4 h-full mr-0 bg-cyan-300/10 rounded-lg shadow-xl">
          123123
        </div>
      </div>
      <div className="w-4/5 h-full p-12 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
