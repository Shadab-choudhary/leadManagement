import React from "react";
import { motion } from "framer-motion";
import ReactApexChart from "react-apexcharts";

interface ProgressProps {
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  const chartOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          background: "#e7e7e7",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "22px",
            fontWeight: "bold",
            color: "#000",
            offsetY: 0,
          },
        },
      },
    },
    fill: {
      colors: ["#6A67CE"],
    },
  };

  const chartSeries = [percentage];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
         <h4 className="text-xl font-semibold text-black dark:text-white">
            Profit this week
          </h4>
        <div className="w-full h-full">
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="radialBar"
            height={344}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-title-sm2 font-bold text-black dark:text-white mt-4">
            My Progress
          </h3>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4"
          >
            More Details
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Progress;
