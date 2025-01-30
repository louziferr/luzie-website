"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SingleLevelDropdownMenu } from "./dropdown";

interface HeaderProps {
  sideBarVisible: boolean;
  handleBurgerClick: () => void;
  showDropdown: boolean;
  toggleDropdown: () => void;
}

export default function Header({
  sideBarVisible,
  handleBurgerClick,
  showDropdown,
  toggleDropdown,
}: HeaderProps) {
  function handleClick() {
    handleBurgerClick();
  }

  const headerHeight = 90;
  const headerItems: string[][] = [
    ["Über mich", "/ueber_mich"],
    ["Kontakt", "/kontakt"],
  ];

  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [topShiftString, setTopShiftString] = useState("-0px");
  const [topShift, setTopShift] = useState(0);

  const [atTop, setAtTop] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Check if at the top
      setAtTop(currentScrollY <= 0);

      // Check if at the bottom
      setAtBottom(currentScrollY + windowHeight >= fullHeight);

      // Update the last scroll position
      setLastScrollY(currentScrollY);

      if (atTop) {
        setTopShift(-headerHeight);
        setTopShiftString(`-0px`);
        return;
      }
      if (atBottom) {
        return;
      }

      if (currentScrollY < lastScrollY) {
        if (topShift >= 0) {
          setTopShift(topShift - 10);
        }
      } else {
        if (topShift <= headerHeight) {
          setTopShift(topShift + 10);
          if (showDropdown) {
            toggleDropdown();
          }
        }
      }

      setTopShiftString(`-${topShift}px`);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className="fixed w-full z-50 shadow-black shadow-sm"
      style={{ top: topShiftString }}
    >
      <div
        className={`bg-white flex justify-between items-center px-5 py-2.5 max-h-[90px] ${
          sideBarVisible ? "brightness-50" : "brightness-100"
        }`}
      >
        <div className="p-2">
          <Link href="/">
            <h1 className="p-0 text-darkBlue">LA</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <div className="border-r-2 border-gray-400">
            <SingleLevelDropdownMenu
              buttonLabel="Leistungen"
              showDropdown={showDropdown}
              toggleDropdown={toggleDropdown}
              items={[
                { title: "Web-Entwicklung", url: "/webentwicklung" },
                { title: "Lehre", url: "/lehre" },
                { title: "Programmierung", url: "/programmierung" },
              ]}
            />
          </div>

          {headerItems.map((item, itemIndex) => (
            <Link key={itemIndex} href={item[1]} className="nav-link">
              {item[0]}
            </Link>
          ))}
        </nav>

        <button
          className="block md:hidden focus:outline-none"
          id="menu-button"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#ffffff"
            viewBox="0 0 24 24"
            stroke="darkBlue"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {sideBarVisible && (
        <div
          className="bg-white text-primary space-y-5 px-4 py-2 
        fixed top-0 right-0 w-2/3 h-full z-50 flex flex-col border-darkBrown"
          id="burger-menu"
        >
          <p className="text-4xl ml-4 mt-4 text-darkBlue font-alfa">LA</p>
          <p className="nav-link text-[30px] mt-4">Leistungen</p>
          <div className="ml-4 pb-4 border-l-4 border-gray-500 grid grid-cols-1 gap-2">
            <Link href="/webentwicklung" className="nav-link text-[30px] mt-4">
              Webentwicklung
            </Link>
            <Link href="/lehre" className="nav-link text-[30px] mt-4">
              Lehre
            </Link>
            <Link href="/programmierung" className="nav-link text-[30px] mt-4">
              Programmierung
            </Link>
          </div>
          {headerItems.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item[1]}
              className="nav-link text-[30px] mt-4"
            >
              {item[0]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
