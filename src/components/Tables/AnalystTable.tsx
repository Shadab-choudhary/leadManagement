import { Package } from '../../types/package';
import { CiEdit } from 'react-icons/ci';
import { GoEye, GoTrash } from 'react-icons/go';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AnimatePresence } from 'framer-motion';
import CreateLeadModal from '../Modal/CreateLeadModal';
import { Link } from 'react-router-dom';

const packageData: Package[] = [
  {
    industry: 'Tech',
    product: 'Software',
    companyName: 'Tech Corp',
    contactPersonName: 'John Doe',
    designation: 'Manager',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    officialEmail: 'john.doe@techcorp.com',
    alternateEmail: 'john.alt@techcorp.com',
    contactNo: '+1234567890',
    whatsappNumber: '+1234567890',
    alternateContactNo: '+0987654321',
    dateTime: 'Jan 13, 2023',
    status: 'Interested',
  },
  {
    industry: 'Finance',
    product: 'Insurance',
    companyName: 'Finance Corp',
    contactPersonName: 'Jane Smith',
    designation: 'Director',
    linkedinUrl: 'https://linkedin.com/in/janesmith',
    officialEmail: 'jane.smith@financecorp.com',
    alternateEmail: 'jane.alt@financecorp.com',
    contactNo: '+2234567890',
    whatsappNumber: '+2234567890',
    alternateContactNo: '+1987654321',
    dateTime: 'Jan 13, 2023',
    status: 'Not Interested',
  },
];

const AnalystTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    product: '',
    designation: '',
    industry: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const filteredData = packageData
    .filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .filter((item) =>
      Object.entries(filters).every(
        ([key, value]) => !value || String(item[key as keyof Package]).includes(value)
      )
    );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const toggleSelectAll = () => {
    setSelectedAll(!selectedAll);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-6 py-2 bg-primary text-white flex justify-end rounded-md"
      >
        Create Lead
      </button>
      <div className="flex flex-wrap justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="md:w-80 sm:w-full  rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex space-x-2">
          <div className="relative z-20 bg-white dark:bg-form-input">

            <select
              name="product"
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-2 pr-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
              onChange={handleFilterChange}
            >
              <option value="" className='text-body dark:text-bodydark'>Filter by Product</option>
              <option value="Software" className='text-body dark:text-bodydark'>Software</option>
              <option value="Insurance" className='text-body dark:text-bodydark'>Insurance</option>
            </select>
            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="relative z-20 bg-white dark:bg-form-input">
            <select
              name="designation"
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-2 pr-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
              onChange={handleFilterChange}
            >
              <option value="" className='text-body dark:text-bodydark'>Filter by Designation</option>
              <option value="Manager" className='text-body dark:text-bodydark'>Manager</option>
              <option value="Director" className='text-body dark:text-bodydark'>Director</option>
            </select>
            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="relative z-20 bg-white dark:bg-form-input">
            <select
              name="industry"
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 pl-2 pr-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input "
              onChange={handleFilterChange}
            >
              <option value="" className='text-body dark:text-bodydark'>Filter by Industry</option>
              <option value="Tech" className='text-body dark:text-bodydark'>Tech</option>
              <option value="Finance" className='text-body dark:text-bodydark'>Finance</option>
            </select>
            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto overflow-hidden hide-scrollbar">
        <table className="w-full table-auto whitespace-nowrap">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4">
                <input
                  type="checkbox"
                  checked={selectedAll}
                  onChange={toggleSelectAll}
                />
              </th>
              {['Industry', 'Product', 'Company Name', 'Contact Person Name', 'Designation', 'LinkedIn URL', 'Official Email', 'Alternate Email', 'Contact No', 'WhatsApp Number', 'Alternate Contact No', 'Date & Time', 'Status', 'Actions'].map((header) => (
                <th key={header} className="py-4  pr-4 font-medium text-black dark:text-white">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b py-4 px-4">
                  <input type="checkbox" className='accent-primary' />
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.industry}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.product}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.companyName}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.contactPersonName}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.designation}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <Link
                    to={packageItem.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </Link>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.officialEmail}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.alternateEmail}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.contactNo}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.whatsappNumber}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.alternateContactNo}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {packageItem.dateTime}
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === 'Interested'
                      ? 'bg-success text-success'
                      : packageItem.status === 'Not Interested'
                        ? 'bg-danger text-danger'
                        : 'bg-warning text-warning'
                      }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <GoEye className="text-boxdark dark:text-white" />
                    </button>
                    <button className="hover:text-primary">
                      <GoTrash className="text-boxdark dark:text-white" />
                    </button>
                    <button className="hover:text-primary">
                      <CiEdit className="text-boxdark text-xl dark:text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
        breakLabel={'...'}
        breakClassName={'cursor-default'}
        renderOnZeroPageCount={null}
      />
      <AnimatePresence>
        {showModal && (
          <CreateLeadModal closeModal={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnalystTable;
