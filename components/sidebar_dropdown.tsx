import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SideBarDropDownProps {
  buttonLabel: string;
  showDropdown: boolean;
  toggleDropdown: () => void;
  items: {
    title: string;
    url?: string;
    icon?: Element;
    action?: () => void;
  }[];
}

export const SideBarDropDown = ({
  buttonLabel,
  showDropdown,
  toggleDropdown,
  items,
}: SideBarDropDownProps) => {
  return (
    <div className="relative mt-4 border-b-2 pb-2 border-gray-300">
      <button
        type="button"
        className="ml-2 inline-flex text-[30px] font-saira navlink items-center justify-center"
        onClick={toggleDropdown}
      >
        {buttonLabel}
        <span className="ml-2">
          {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      {showDropdown && (
        <div className="top-[52px]">
          <ul className="">
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center gap-4 font-saira text-[25px]`}
              >
                <Link href={item.url!}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
