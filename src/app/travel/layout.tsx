/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-18 10:36:37
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-24 17:59:52
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const arr = new Array(100).fill(0)
  return (
    <div className="flex flex-row h-full">
      <div className="w-1/5 h-full pt-8 pb-8 shrink-0 flex flex-col items-end">
        <div className="w-3/4 h-full mr-0 bg-cyan-300/10 rounded-lg shadow-xl overflow-y-auto overflow-x-hidden">
          <ul>
            <li className="h-12 m-2 rounded-lg flex items-center justify-center hover:bg-cyan-300/20" >
              <div className="h-full w-14 bg-red-100 rounded-lg">
              </div>
              <div className="h-full w-full">
                <a href="/travel" className="h-full w-full pl-4 flex items-center ">首页</a>
              </div>
            </li>
            <li className="h-12 m-2 rounded-lg flex items-center justify-center hover:bg-cyan-300/20">
              <div className="h-full w-14 bg-red-100 rounded-lg">
              </div>
              <div className="h-full w-full">
                <a href="/travel/list" className="h-full w-full pl-4 flex items-center ">list Demo</a>
              </div>
            </li>
            <li className="h-12 m-2 rounded-lg flex items-center justify-center hover:bg-cyan-300/20">
              <div className="h-full w-14 bg-red-100 rounded-lg">
              </div>
              <div className="h-full w-full">
                <a href="/travel/threedemo" className="h-full w-full pl-4 flex items-center ">Three.js Demo</a>
              </div>
            </li>
            {/* <li className="h-12 m-2 rounded-lg flex items-center justify-center hover:bg-cyan-300/20">
              <div className="h-full w-14 bg-red-100 rounded-lg">
              </div>
              <div className="h-full w-full">
                <a href="/travel/konvademo" className="h-full w-full pl-4 flex items-center ">konvademo Demo</a>
              </div>
            </li> */}
            <li className="h-12 m-2 rounded-lg flex items-center justify-center hover:bg-cyan-300/20">
              <div className="h-full w-14 bg-red-100 rounded-lg">
              </div>
              <div className="h-full w-full">
                <a href="/travel/pixidemo" className="h-full w-full pl-4 flex items-center ">莱茵登录页 Demo</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-4/5 h-full p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
