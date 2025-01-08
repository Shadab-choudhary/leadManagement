import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddCompanyDropdownProps {
  companyList: string[];
  onAddCompany: (newCompany: string) => void;
  onSelectCompany: (selectedCompany: string) => void;
}

const AddCompanyDropdown: React.FC<AddCompanyDropdownProps> = ({
  companyList,
  onSelectCompany,
}) => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
      setSelectedCompany(selectedValue);
      onSelectCompany(selectedValue);
  };

  return (
    <div className="relative z-20 mb-4 border border-black/20 rounded-lg p-4 bg-[#f1f5f9]">
      <label className="mb-3 block text-sm font-medium text-black dark:text-black">Add New</label>
      <div className="relative z-20 dark:bg-form-input max-sm:w-full w-1/3 rounded-lg">
        <select
          name="companyName"
          value={selectedCompany}
          onChange={handleSelectChange}
          className="relative w-full text-left bg-white appearance-none rounded border border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        >
          <option value="" disabled>
            Select Company
          </option>
          {companyList.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
          <option value="add-new" className="text-primary font-semibold">
            + Add New Company
          </option>
        </select>
      </div>
    </div>
  );
};

export default AddCompanyDropdown;
