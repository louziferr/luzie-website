import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  showDropdown: boolean;
  toggleDropdown: () => void;
  items: {
    title: string;
    url?: string;
    icon?: Element;
    action?: () => void;
    newTab?: boolean;
  }[];
}

export const SingleLevelDropdownMenu = ({
  buttonLabel,
  showDropdown,
  toggleDropdown,
  items,
}: SingleLevelDropdownMenuProps) => {
  return (
    <div className="relative px-4">
      <button
        type="button"
        className="inline-flex text-[18px] font-saira navlink items-center justify-center"
        onClick={toggleDropdown}
      >
        {buttonLabel}
        <span className="ml-2">
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {showDropdown && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[52px]">
          <ul className="w-56 h-auto shadow-md rounded-b-md p-2 border animate-expand border-black border-t-0 bg-white">
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative flex p-2 items-center gap-4 animate-fade font-saira text-[18px] hover:bg-gray-300 hover:cursor-pointer rounded-md`}
              >
                <Link href={item.url!} target={item.newTab ? "_blank" : ""}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
