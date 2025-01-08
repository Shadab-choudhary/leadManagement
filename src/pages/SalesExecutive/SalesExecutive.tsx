import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import LineChart from '../../components/Charts/LineChart';
import LeadDistribution from '../../components/Charts/LeadDistribution';
import {   CiSaveDown1, CiLink, CiTrophy, CiMug1 , CiTimer ,CiBoxes, CiUser  } from "react-icons/ci";
import AnalystTable from '../../components/Tables/AnalystTable';
import InsideSalesExecutive from '../../components/SalesExecutive/InsideSalesExecutive';
import SalesOverviewChart from '../../components/Charts/SalesOverviewChart';
import Progress from '../../components/Charts/Progress';
import SalesExecutiveTable from '../../components/Tables/SalesExcutiveTable';
const SalesExecutive: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="New Leads" total="33" rate="0.43%" levelUp>
          <CiBoxes className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Leads" total="393" rate="9.43%" levelUp>
          <CiBoxes className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Connected" total="45" rate="4.35%" levelUp>
         <CiLink className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Working" total="24" rate="2.59%" levelUp>
         <CiTimer className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Purposal Sent" total="3456" rate="0.95%" levelDown>
         <CiMug1 className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Customer" total="3456" rate="0.95%" levelUp>
          <CiUser className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Lost Lead" total="16" rate="7.95%" levelDown>
      <CiSaveDown1 className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Win Leads" total="20" rate="7.95%" levelUp>
        <CiTrophy className=" text-2xl fill-primary dark:fill-white" />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
       <SalesOverviewChart/>
         <Progress percentage={75}/>
        <div className="col-span-12 xl:col-span-12">
          <SalesExecutiveTable />
          <InsideSalesExecutive />

        </div>
       
      </div>
    </>
  );
};

export default SalesExecutive;
