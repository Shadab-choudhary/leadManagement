import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesOverviewChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Week');

  // Dynamic chart data based on the active tab
  const getChartData = () => {
    switch (activeTab) {
      case 'Month':
        return [
          { name: 'Number of Projects', type: 'bar', data: [70, 85, 60, 90, 75, 65, 80, 100, 90, 95, 85, 100] },
          { name: 'Revenue', type: 'line', data: [50, 70, 65, 85, 60, 80, 75, 95, 85, 90, 80, 95] },
          { name: 'Active Projects', type: 'line', data: [40, 60, 55, 65, 50, 70, 60, 80, 70, 75, 65, 80] },
        ];
      case 'Year':
        return [
          { name: 'Number of Projects', type: 'bar', data: [850, 920, 880, 950, 890, 900, 910, 970, 940, 960, 920, 980] },
          { name: 'Revenue', type: 'line', data: [780, 800, 790, 820, 780, 810, 800, 850, 830, 840, 810, 870] },
          { name: 'Active Projects', type: 'line', data: [650, 700, 680, 720, 680, 700, 690, 750, 730, 740, 700, 750] },
        ];
      default:
        return [
          { name: 'Number of Projects', type: 'bar', data: [50, 75, 60, 100, 40, 85, 90, 55, 75, 60, 95, 100] },
          { name: 'Revenue', type: 'line', data: [40, 60, 50, 75, 30, 70, 80, 50, 65, 50, 85, 90] },
          { name: 'Active Projects', type: 'line', data: [30, 50, 40, 30, 20, 60, 70, 40, 55, 40, 75, 85] },
        ];
    }
  };

  const chartOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4, 4],
      curve: 'smooth',
    },
    colors: ['#6B21A8', '#22C55E', '#EF4444'],
    fill: {
      opacity: [1, 0.2, 0],
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        borderRadiusApplication: 'end', 
        columnWidth: '30%', 
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: ['#4B5563'],
      },
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      labels: {
        style: {
          fontSize: '12px',
          colors: ['#6B7280'],
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          fontSize: '12px',
          colors: ['#6B7280'],
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <div className="col-span-12 rounded-sm border bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {['Week', 'Month', 'Year', 'All'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md ${activeTab === tab
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-600'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ReactApexChart
        options={chartOptions}
        series={getChartData()}
        type="line"
        height={350}
      />

      {/* Bottom Blocks */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 text-center">
        {[
          { value: "12,721", label: "Number of Projects", color: "text-purple-600" },
          { value: "721", label: "Active Projects", color: "text-green-600" },
          { value: "$2,50,523", label: "Revenue", color: "text-blue-600" },
          { value: "12,275h", label: "Working Hours", color: "text-indigo-600" },
        ].map((block, index, array) => (
          <div
            key={index}
            className={`border-t border-gray-300 py-4 ${(index + 1) % 4 !== 0 ? "border-r" : ""
              }`}
          >
            <p className={`text-lg font-bold ${block.color}`}>{block.value}</p>
            <p className="text-sm text-gray-500">{block.label}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SalesOverviewChart;
