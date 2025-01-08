import React, { useState } from 'react';
import FormInput from '../../components/Forms/FormInput';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import AddCompanyDropdown from '../../components/Forms/AddCompanyDropdown';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
function EditLead() {
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
    <>
      <Breadcrumb pageName={"Edit Lead"} />
      <div className='bg-white p-4 rounded-lg'>

        <form onSubmit={handleSubmit} >
          <AddCompanyDropdown
            companyList={companyList}
            onAddCompany={handleAddCompany}
            onSelectCompany={handleSelectCompany}
          />
          <div className="grid max-sm:grid-cols-1 md:grid-cols-3 lg:gap-2 md:gap-3">
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
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-8 w-44 bg-primary text-white py-2 rounded-md"
            >
              update
            </button>
          </div>
        </form>

      </div>
    </>
  )
}

export default EditLead
