/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-23 10:40:42
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-23 11:01:12
 */
const TravelPage: React.FC = () => {
  const arr = new Array(5).fill(0)
  return (
    <main className="flex flex-col items-center justify-between">
      {arr.map(item => {
        return (
          <div key={'123'} className="w-full h-64 shrink-0 mb-4 mr-4 bg-cyan-300/10 rounded-lg shadow-xl hover:bg-cyan-300/20">
            123213
          </div>
        )
      })}
    </main>
  )
}

export default TravelPage;