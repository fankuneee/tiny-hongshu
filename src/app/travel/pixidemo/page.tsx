/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-08-24 11:04:35
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-08-24 19:01:20
 */
"use client"
import React, { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';
import Image from 'next/image';

let isOriginal = false;

const AnimationPage = () => {
  const appRef = useRef<any>(null);
  const lineRef = useRef<any>(null);
  const squareRef = useRef<any>(null);
  const idRef = useRef<any>(null);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);
  const [formOpacity, setFormOpacity] = useState(1); // 用于跟踪表单的透明度
  const [formHidden, setFormHidden] = useState(false); // 用于跟踪表单的隐藏状态
  const originalColor = 0xBFE235; // 正方形的原始颜色
  const blinkColor = 0xFF0000; // 闪烁时的颜色
  const squareSize = 20; // 正方形的大小
  const speed = 2; // 正方形移动的速度

  useEffect(() => {
    // 初始化 PIXI.Application
    appRef.current = new PIXI.Application({ resolution: 4, backgroundColor: 0xEBE8E6, backgroundAlpha: 1 });
    document.getElementById('pixi-container')?.appendChild(appRef.current.view);

    appRef.current.view.style.width = "100%";
    appRef.current.view.style.height = "100%";

    // 创建初始的垂直直线
    lineRef.current = new PIXI.Graphics();
    lineRef.current.lineStyle(1, 0x000000, 1);
    lineRef.current.moveTo(200, -100);
    lineRef.current.lineTo(200, 1000);
    appRef.current.stage.addChild(lineRef.current);

    // 创建正方形
    squareRef.current = new PIXI.Graphics();
    squareRef.current.beginFill(originalColor);
    squareRef.current.drawRect(-squareSize/2, -squareSize/2, squareSize, squareSize);
    squareRef.current.endFill();
    squareRef.current.x = 200;
    squareRef.current.y = appRef.current.screen.height / 2;
    appRef.current.stage.addChild(squareRef.current);

    // 设置动画
    let direction = 1; // 1 表示向下，-1 表示向上
    appRef.current.ticker.add(() => {
      squareRef.current.y += speed * direction;
      if (squareRef.current.y + 50 >= appRef.current.screen.height - squareSize/2 || squareRef.current.y - 50 <= squareSize/2) {
        direction *= -1; // 改变方向
      }
    });
  }, []);

  const comfirmUserId = (event: any) => {
    event.preventDefault();
    const enteredId = idRef.current.value;
    // 假设正确的 ID 是 "12345"
    if (enteredId !== "12345" && !isBlinking) {
      setIsBlinking(true); // 设置为正在闪烁

       // 用于跟踪当前颜色是否为原始颜色
      const blinkInterval = setInterval(() => {
        squareRef.current.tint = !isOriginal ? blinkColor : originalColor;
        isOriginal = !isOriginal;
      }, 500); // 每500毫秒切换一次颜色

      setTimeout(() => {
        clearInterval(blinkInterval); // 停止闪烁
        squareRef.current.tint = originalColor; // 恢复原始颜色
        setIsBlinking(false); // 设置为不再闪烁
      }, 2000);
    } 
    if (enteredId === "12345") {
      setFormOpacity(0);
      setTimeout(() => {
        setFormHidden(true);
      }, 500);
    }
  }

  return (
    <div className='bg-transparent w-full h-full relative flex flex-col justify-center items-center'>
      <div id="pixi-container" className='bg-transparent w-full h-full absolute top-0 left-0 z-0' />
      <div className='absolute flex flex-col top-12 left-12 justify-center items-center'>
        <div className="text-5xl font-bold font-['Helvetica'] text-black">RHINE LAB</div>
        <div className="text-lg font-['Helvetica'] text-black">SYNTHESIZE INFORMATION</div>
        <div className='flex justify-between w-full shrink-0'>
          <div className="text-4xl font-['Helvetica'] text-black">ANALYSIS</div>
          <div className={`text-4xl font-bold font-['Helvetica'] text-black hover:text-[${originalColor}]`}>OS</div>
        </div>
      </div>
      <div className='flex items-center z-10'>
        <Image width={200} height={200} src={'/ark/rhine.svg'} alt={''} />
        <div className='w-96 pl-16'>
          <form onSubmit={comfirmUserId} className={`transition-opacity duration-500 opacity-${formOpacity} ${!formHidden ? '': 'hidden'}`}>
            <label htmlFor="id" className="font-bold font-['Helvetica'] text-black">- ID COMFIRMED:</label>
            <input ref={idRef} type="text" name='id' id='id' className="bg-transparent focus:outline-none blinking-caret font-bold font-['Helvetica'] text-black" ></input>
          </form>
          <div className={`font-bold font-['Helvetica'] text-black opacity-${formOpacity}`}>- REQUEST RECEIVED</div>
          <div className={`font-bold font-['Helvetica'] text-black opacity-${formOpacity}`}>- START PROCESSING</div>
        </div>
      </div>
      <div className='absolute w-64 flex right-12 bottom-12 justify-between items-baseline'>
        <div className="text-lg font-['Helvetica'] text-black">POWERED BY</div>
        <div className="text-lg font-bold font-['Helvetica'] text-black">RHINE LAB</div>
        <div className="w-2 h-1 bg-black animate-blink"></div>
      </div>
    </div>
  );
};

export default AnimationPage;

