import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';
import { GoEye, GoTrash } from 'react-icons/go';
import ReactPaginate from 'react-paginate';
import ActionForm from '../Forms/ActionForm';
import { Package } from '../../types/package';

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

const SalesExecutiveTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters] = useState({
    product: '',
    designation: '',
    industry: '',
  });

  const [selectedAll, setSelectedAll] = useState(false);
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
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
    const allRowIds = currentPageData.map((_, index) => offset + index);
    if (selectedAll) {
      setCheckedRows(checkedRows.filter((row) => !allRowIds.includes(row)));
    } else {
      setCheckedRows([...checkedRows, ...allRowIds.filter((id) => !checkedRows.includes(id))]);
    }
    setSelectedAll(!selectedAll);
  };

  const toggleRowCheck = (index: number) => {
    const rowIndex = offset + index;
    if (checkedRows.includes(rowIndex)) {
      setCheckedRows(checkedRows.filter((row) => row !== rowIndex));
    } else {
      setCheckedRows([...checkedRows, rowIndex]);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {checkedRows.length > 0 && <ActionForm />}
      <div className="max-w-full overflow-x-auto overflow-hidden hide-scrollbar">
        <table className="w-full table-auto whitespace-nowrap">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4">
                <input
                  type="checkbox"
                  disabled
                  className=' accent-primary h-5 w-5 disabled:accent-black-2'
                  checked={selectedAll}
                  onChange={toggleSelectAll}
                />
              </th>
              {[
                'Industry',
                'Product',
                'Company Name',
                'Contact Person Name',
                'Designation',
                'LinkedIn URL',
                'Official Email',
                'Alternate Email',
                'Contact No',
                'WhatsApp Number',
                'Alternate Contact No',
                'Date & Time',
                'Status',
                'Actions',
              ].map((header) => (
                <th key={header} className="py-4 pr-4 font-medium text-black dark:text-white">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((packageItem, index) => (
              <tr key={index}>
                <td className="border-b py-4 px-4">
                  <input
                    type="checkbox"
                    className="accent-primary h-5 w-5"
                    checked={checkedRows.includes(offset + index)}
                    onChange={() => toggleRowCheck(index)}
                  />
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
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      packageItem.status === 'Interested'
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
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="my-4 flex justify-end items-center gap-3 text-primary dark:text-white"
        previousClassName="text-primary dark:text-white cursor-pointer"
        nextClassName="text-primary dark:text-white cursor-pointer"
        disabledClassName="opacity-50 cursor-not-allowed"
        pageClassName="cursor-pointer"
        pageLinkClassName="px-3 py-1 rounded-full text-primary dark:text-white"
        activeClassName="font-bold bg-primary dark:text-white text-whiter rounded-full px-3 py-1"
        breakLabel="..."
        breakClassName="cursor-default"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default SalesExecutiveTable;
