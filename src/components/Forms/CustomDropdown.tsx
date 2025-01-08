import { useState } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  options: string[];
  label: string;
  value: string;
  onSelect: (value: string) => void;
  dateTimePicker?: boolean; // Optional prop for date-time picker
  remark?: {
    visible: boolean;
    onToggle: () => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSave: () => void;
    isSaving: boolean;
  };
}

const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  label,
  onSelect,
  value,
  dateTimePicker = false,
  remark,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [date, setDate] = useState(""); // Will store date input
  const [time, setTime] = useState(""); // Will store time input

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full text-left appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      >
        {selected || label}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute w-full mt-1 bg-white dark:text-bodydark border dark:border-b-white rounded-md shadow-lg"
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 text-body border-b-2 dark:text-bodydark dark:bg-boxdark cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
          {dateTimePicker && (
            <div className="px-4 py-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Select Date (Optional):
              </label>
              <input
                type="date"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setDate(e.target.value)}
              />
              <label className="mb-3 block text-sm font-medium text-black dark:text-white mt-2">
                Select Time (Optional):
              </label>
              <input
                type="time"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          )}
          {remark && (
            <div className="px-4 py-2">
              {remark.visible ? (
                <div>
                  <textarea
                    value={remark.value}
                    onChange={remark.onChange}
                    className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                  <button
                    onClick={remark.onSave}
                    className={`mt-2 px-4 py-2 rounded-md text-white ${
                      remark.isSaving
                        ? "bg-gray-400"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    disabled={remark.isSaving}
                  >
                    {remark.isSaving ? "Saving..." : "Save Remark"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={remark.onToggle}
                  className="mt-2 px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                >
                  Add Remark
                </button>
              )}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CustomDropdown;
