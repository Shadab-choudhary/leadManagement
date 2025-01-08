import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Day');

  type DataType = {
    [key: string]: {
      categories: string[];
      series: { name: string; data: number[] }[];
      yAxisMax: number;
    };
  };

  const data: DataType = {
    Day: {
      categories: [
        '12 AM',  '3 AM', '6 AM', '9 AM',  '12 PM', '3 PM',  '6 PM',
        '9 PM', '12PM' 
      ],
      series: [
        { name: 'New Leads', data: [  0, 40,  60, 55,  
          75, 78, 85, 75, 65] },
        { name: 'Lost Leads', data: [  0, 30,  
          88, 85, 78, 
          80, 75, 70, 68] },
        { name: 'Won Leads', data: [  0, 40, 25, 30, 45, 23,
          88, 85, 78, 
        ] },
        
      ],
      yAxisMax: 100,
    },
    Week: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      series: [
        { name: 'New Leads ', data: [0, 300, 250, 400, 350, 500, 450] },
        { name: 'Lost Leads', data: [0, 200, 180, 300, 250, 400, 350] },
        { name: 'Won Leads', data: [0, 250, 186, 350, 480, 460, 250] },
      ],
      yAxisMax: 500,
    },
    Month: {
      categories: ["3", "6", "9", "12", "15", "18" , "21", "24", "27" ,"30"],
      series: [
        { name: 'New Leads', data: [ 0, 900, 850, 950, 850, 700, 720,750, 700, 800, 
        ] },
        { name: 'Lost Leads', data: [ 0, 750, 700, 800, 750, 114, 456,765, 850, 900, ] },
        { name: 'Won Leads', data: [ 0, 720, 390, 899, 730, 650, 750, 700, 800, 890, ] },
      ],
      yAxisMax: 1000,
    },
  };

  const options: ApexOptions = {
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#F93827', '#16C47F'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'line',
      toolbar: { show: false },
    },
    stroke: { width: [3, 3, 3], curve: 'smooth' },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#3056D3', '#F93827', '#16C47F'],
      strokeWidth: 4,
    },
    xaxis: {
      type: 'category',
      categories: data[activeTab].categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: data[activeTab].yAxisMax,
    },
  };

  const handleTabChange = (tab: string) => setActiveTab(tab);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      {/* Tabs */}
      <div className="flex justify-end">
        <div className="inline-flex items-center rounded-md bg-white gap-2 p-1 dark:bg-meta-4">
          {['Day', 'Week', 'Month'].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-xs font-medium rounded-full ${
                activeTab === tab
                  ? 'bg-primary text-white hover:bg-primary'
                  : 'bg-gray-400 text-black dark:bg-boxdark dark:text-white hover:bg-primary hover:text-white'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div id="chartOne" className="-ml-5">
        <ReactApexChart options={options} series={data[activeTab].series} type="line" height={350} />
      </div>
    </div>
  );
};

export default LineChart;
