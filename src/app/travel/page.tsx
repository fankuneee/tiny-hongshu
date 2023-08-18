/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 12:22:08
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-18 11:48:44
 */
const TravelPage: React.FC = () => {
  const arr = new Array(5).fill(0)
  return (
    <main className="flex flex-col items-center justify-between">
      {arr.map(item => {
        return (
          <div key={'123'} className="w-11/12 h-64 shrink-0 m-4 bg-cyan-300/10 rounded-lg shadow-xl">
            123213
          </div>
        )
      })}
    </main>
  )
}

export default TravelPage;