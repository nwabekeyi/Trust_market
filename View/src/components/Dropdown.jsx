import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import arrow icons

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center">
        {title}
        {isOpen ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
      </button>
      {isOpen && (
        <div className="absolute top-4 left-[-2] mt-2 w-48 bg-white border rounded-lg shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
