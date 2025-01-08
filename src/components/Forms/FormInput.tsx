import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

interface FormInputProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'dropdown' | 'date';
  options?: string[]; // Required for dropdown
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  options,
  placeholder,
  value,
  onChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="mb-4">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">{label}</label>
      {type === 'dropdown' && options ? (
        <div className="relative bg-transparent dark:bg-form-input">
          <button
            type="button"
            className="relative w-full text-left appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary "
            onClick={toggleDropdown}
          >
            {value || placeholder || 'Select an option'}
            <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </button>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1  bg-white dark:text-bodydark border dark:border-b-white rounded-md shadow-lg"
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-body border-b-2  dark:text-bodydark dark:bg-boxdark cursor-pointer"
                  onClick={() => {
                    onChange &&
                      onChange({
                        target: { name, value: option },
                      } as React.ChangeEvent<HTMLInputElement>);
                    setDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      )}
    </div>
  );
};

export default FormInput;
