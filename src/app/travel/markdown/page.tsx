/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 23:00:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-06-29 17:02:02
 */
"use client"
import React, { useState } from 'react';

const MyEditor = () => {
  const [aniClass, setAniClass] = useState<string>('');
  const handleClick = () => {
    console.log('Button clicked');
    setAniClass('animate__fadeInDownBig')
  };
  return (
    <main className="flex flex-col justify-between px-36 py-6 overflow-y-auto h-4/5 w-full">
      <button onClick={handleClick}>click me!</button>
      <div className={`${aniClass}`}>123123123123123123123</div>
    </main>
  );
};

export default MyEditor;
