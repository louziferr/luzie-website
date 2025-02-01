import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface PageDropdownProps {
  buttonLabel: string;
  items: {
    title: string;
    description: string;
    icon?: Element;
  }[];
}

export const PageDropdown = ({ buttonLabel, items }: PageDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="relative px-8">
      <button
        type="button"
        className="inline-flex text-3xl font-saira navlink items-center justify-center"
        onClick={toggleDropdown}
      >
        {buttonLabel}
        <span className="ml-2">
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {showDropdown && (
        <div>
          <ul className="w-full pt-6 h-auto shadow-md p-4 animate-expand bg-white">
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center gap-4 animate-fade font-saira text-xl`}
              >
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
