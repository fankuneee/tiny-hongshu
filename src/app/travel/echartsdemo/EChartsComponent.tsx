/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-09-04 16:47:38
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-09-04 18:04:02
 */
"use client"
import React from 'react';
import ReactECharts from 'echarts-for-react';

const EChartsComponent = ({ option }: any) => {
  return (<ReactECharts option={option} />);
};

export default EChartsComponent;
