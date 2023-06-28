/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 09:45:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-06-28 21:49:51
 */
export default function Home() {
  return (
    // <div className="-mt-32 w-full flex items-center justify-center h-screen">
    //     <div className="relative z-10 text-center text-white mx-auto max-w-xl">
    //         <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic">TINY HONGSHU</h1>
    //         <a className="relative inline-block rounded-full border-2 border-white text-lg px-8 py-3 hover:bg-white hover:text-gray-900 font-bold">START</a>
    //     </div>
    //     <Image width={1919} height={1280} quality={100} src="/images/home.png" className="w-image h-full absolute inset-0 object-cover opacity-90" alt={''} />
    // </div>
    // <ParallaxContainer>
    //   <Image width={1919} height={1280} quality={100} src="/images/home.png" className="w-image h-full absolute" alt={''} />
    //   <Image width={1919} height={1280} quality={100} src="/images/home-02.png" className="w-image h-full absolute" alt={''} />
    //   <Image width={1919} height={1280} quality={100} src="/images/home-03.png" className="w-image h-full absolute" alt={''} />
    // </ParallaxContainer>
    <div className='absolute w-full h-full bg-cyan-300 top-0' >
      <div className="w-full h-full bg-[url('/images/home.png')] bg-fixed bg-[center_top_0] bg-cover">
        <div className="wd"> Fengyu online</div>
      </div>
      <div className="bd"> Fengyu Technology</div>
      <div className="w-full h-full bg-[url('/images/home-02.png')] bg-fixed bg-[center_top_0] bg-cover">
          <div className="wd"> Fengyu online</div>
      </div>
      <div className="bd"> Fengyu Technology</div>
      <div className="w-full h-full bg-[url('/images/home-03.png')] bg-fixed bg-[center_top_0] bg-cover">
          <div className="wd"> Fengyu online</div>
      </div>
    </div>
  )
}
