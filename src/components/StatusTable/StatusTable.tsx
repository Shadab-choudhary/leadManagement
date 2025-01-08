import { useState } from "react";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

interface Task {
  id: number;
  name: string;
  status: string;
  startDate: string;
  time: string;
  priority: string;
  assignedTo: string;
  remark: string;
}

const sampleTasks: Task[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Task ${index + 1}`,
  status: ["Interested", "Not Interested", "Follow Up", "Cold Mail"][index % 4],
  startDate: "06 Feb 2024",
  time: "10:00 AM",
  priority: ["High", "Medium", "Low"][index % 3],
  assignedTo: ["Analyst", "Growth Manager"][index % 2],
  remark: "Remark for lead progress goes here."
}));

const StatusTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const pageCount = Math.ceil(sampleTasks.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const currentPageData = sampleTasks.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <motion.div
      className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full table-auto whitespace-nowrap border-collapse max-w-full overflow-x-auto overflow-hidden hide-scrollbar">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            <th className="p-3 text-left font-medium text-black dark:text-white">#</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Name</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Status</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Start Date</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Time</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Assigned To</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Remark</th>
            <th className="p-3 text-left font-medium text-black dark:text-white">Priority</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.id}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.name}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    task.status === "Interested"
                      ? "bg-green-100 text-green-600"
                      : task.status === "Not Interested"
                      ? "bg-red-100 text-red-600"
                      : task.status === "Follow Up"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.startDate}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.time}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.assignedTo}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">{task.remark}</td>
              <td className="p-3 border-b border-[#eee] dark:border-strokedark">
                <span
                  className={`px-2 py-1 rounded-lg ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {task.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'my-4 flex justify-end items-center gap-3 text-primary dark:text-white'}
        previousClassName={'text-primary dark:text-white cursor-pointer'}
        nextClassName={'text-primary dark:text-white cursor-pointer'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
        pageClassName={'cursor-pointer'}
        pageLinkClassName={'px-3 py-1 rounded-full text-primary dark:text-white'}
        activeClassName={'font-bold bg-primary dark:text-white text-whiter rounded-full px-3 py-1'}
        breakLabel="..."
        breakClassName="cursor-default"
        renderOnZeroPageCount={null}
      />
    </motion.div>
  );
};

export default StatusTable;
