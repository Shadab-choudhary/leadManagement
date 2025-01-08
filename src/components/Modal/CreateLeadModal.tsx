import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormInput from '../Forms/FormInput';
import { CiCircleRemove } from 'react-icons/ci';
import DatePickerOne from '../Forms/DatePicker/DatePickerOne';
import AddCompanyDropdown from '../Forms/AddCompanyDropdown';

interface CreateLeadModalProps {
  closeModal: () => void;
}

const CreateLeadModal: React.FC<CreateLeadModalProps> = ({ closeModal, }) => {
  const [formData, setFormData] = useState({
    industry: '',
    product: '',
    companyName: '',
    contactPersonName: '',
    designation: '',
    linkedinUrl: '',
    officialEmail: '',
    alternateEmail: '',
    contactNo: '',
    whatsappNumber: '',
    alternateContactNo: '',
    creationDate: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  const [companyList, setCompanyList] = useState<string[]>(['Company A', 'Company B', 'Company C']);


  const handleAddCompany = (newCompany: string) => {
    setCompanyList((prevList) => [...prevList, newCompany]);
  };

  const handleSelectCompany = () => {
    // setSelectedCompany(company);
  };
  return (
    <AnimatePresence>
      <motion.div
       className="fixed inset-0 z-[999999] overflow-y-auto hide-scrollbar  flex items-center justify-center bg-black bg-opacity-50 sm:items-start sm:pt-10 sm:px-4"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-4  max-w-5xl w-full mx-auto relative shadow-default dark:border-strokedark dark:bg-boxdark height-manage   sm:overflow-y-auto sm:p-4"

          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-primary text-white rounded-full"
          >
            <CiCircleRemove size={20} />
          </button>
          <h2 className="text-xl font-bold mb-6">Create Lead</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 sm:gap-6 lg:gap-2 md:gap-3">
            <AddCompanyDropdown
              companyList={companyList}
              onAddCompany={handleAddCompany}
              onSelectCompany={handleSelectCompany}
            />
            <FormInput
              label="Industry"
              name="industry"
              type="dropdown"
              options={['Tech', 'Finance', 'Healthcare']}
              placeholder="Select Industry"
              value={formData.industry}
              onChange={handleInputChange}
            />
            <FormInput
              label="Product"
              name="product"
              type="dropdown"
              options={['Software', 'Insurance']}
              placeholder="Select Product"
              value={formData.product}
              onChange={handleInputChange}
            />
            <FormInput
              label="Company Name"
              name="companyName"
              type="text"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Contact Person Name"
              name="contactPersonName"
              type="text"
              placeholder="Enter Contact Person Name"
              value={formData.contactPersonName}
              onChange={handleInputChange}
            />
            <FormInput
              label="Designation"
              name="designation"
              type="text"
              placeholder="Enter Designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
            <FormInput
              label="LinkedIn URL"
              name="linkedinUrl"
              type="text"
              placeholder="Enter LinkedIn URL"
              value={formData.linkedinUrl}
              onChange={handleInputChange}
            />
            <FormInput
              label="Official Email"
              name="officialEmail"
              type="email"
              placeholder="Enter Official Email"
              value={formData.officialEmail}
              onChange={handleInputChange}
            />
            <FormInput
              label="Alternate Email"
              name="alternateEmail"
              type="email"
              placeholder="Enter Alternate Email"
              value={formData.alternateEmail}
              onChange={handleInputChange}
            />
            <FormInput
              label="Whatsapp  No."
              name="whatsappNo"
              type="text"
              placeholder="Enter Whatsapp No"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
            />
            <FormInput
              label="Contact No"
              name="contactNo"
              type="text"
              placeholder="Enter Contact No"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
            <FormInput
              label="Alternate Contact No"
              name="AlternatecontactNo"
              type="text"
              placeholder="Enter Contact No"
              value={formData.alternateContactNo}
              onChange={handleInputChange}
            />
            {/* <FormInput
              label="Creation Date"
              name="creationDate"
              type="date"
              value={formData.creationDate}
              onChange={handleInputChange}
            /> */}
            <DatePickerOne
              value={formData.creationDate}
              onChange={handleInputChange}
            />
            <div className="md:col-span-2 flex flex-end justify-end ">
              <button
                type="submit"
                className="mt-8 w-44  bg-primary text-white py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateLeadModal;
