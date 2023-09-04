"use client"
import EChartsComponent from './EChartsComponent';

const Page = () => {
  const option = {
    title: {
      text: 'ECharts 示例'
    },
    tooltip: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    yAxis: {},
    series: [{
      name: '数量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  return (
    <div>
      <EChartsComponent option={option} />
    </div>
  );
};

export default Page;
