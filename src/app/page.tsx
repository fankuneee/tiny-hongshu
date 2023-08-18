/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 09:45:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-06-29 16:38:23
 */
export default function Home() {
  return (
    <div className='absolute w-full h-full top-0' >
      <div className="w-full h-full bg-[url('/images/home.png')] bg-fixed bg-[center_top_0] bg-cover flex flex-col justify-center items-center">
        <div className="z-10 text-center text-white mx-auto max-w-xl">
          <h1 className="text-2xl lg:text-4xl mb-4 font-bold uppercase italic">Embark on the journey of a lifetime with Basepoint, where every destination is a new beginning.</h1>
        </div>
      </div>
      {/* <div className="bd">test</div> */}
      <div className="w-full h-full bg-[url('/images/home-02.png')] bg-fixed bg-[center_top_0] bg-cover flex flex-col justify-center items-center">
        <div className="z-10 text-center text-white mx-auto max-w-xl">
          <h1 className="text-2xl lg:text-4xl mb-4 font-bold uppercase italic">Unfold your world map, let Basepoint guide you to the uncharted territories of your heart.</h1>
        </div>
      </div>
      {/* <div className="bd">test</div> */}
      <div className="w-full h-full bg-[url('/images/home-03.png')] bg-fixed bg-[center_top_0] bg-cover flex flex-col justify-center items-center">
        <div className="z-10 text-center text-white mx-auto max-w-xl">
          <h1 className="text-2xl lg:text-4xl mb-4 font-bold uppercase italic">Discover the unseen, explore the unknown, embrace the unexpected. With Basepoint, the world is yours to wander.</h1>
        </div>
      </div>
      <div className="w-full h-full bg-black bg-fixed bg-[center_top_0] bg-cover flex flex-col justify-center items-center">
        <div className="z-10 text-center text-white mx-auto max-w-xl">
          <h1 className="text-2xl lg:text-4xl mb-4 font-bold uppercase italic">POWERED BY CHATGPT.</h1>
        </div>
      </div>
    </div>
  )
}
