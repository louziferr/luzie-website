"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeaderProps {
  sideBarVisible: boolean;
  handleBurgerClick: () => void;
}

export default function Header({
  sideBarVisible,
  handleBurgerClick,
}: HeaderProps) {
  function handleClick() {
    handleBurgerClick();
  }

  const headerHeight = 90;
  const headerItems: string[][] = [
    ["Startseite", "/"],
    ["Über mich", "/ueber_uns"],
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
      const windowHeight = window.innerHeight; // Viewport height
      const fullHeight = document.documentElement.scrollHeight; // Full page height

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
        className={`bg-secondary flex justify-between items-center px-5 py-2.5 max-h-[90px] ${
          sideBarVisible ? "brightness-50" : "brightness-100"
        }`}
      >
        <div className="p-2 text-white">
          <Link href="/">
            <h1 className="p-0 text-white">LA</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {headerItems.map((item, itemIndex) => (
            <Link key={itemIndex} href={item[1]} className="nav-link">
              {item[0]}
            </Link>
          ))}
        </nav>

        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-button"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#ffffff"
            viewBox="0 0 24 24"
            stroke="white"
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
          className="bg-secondary text-primary space-y-5 px-4 py-2 
        fixed top-0 right-0 w-2/3 h-full z-50 flex flex-col border-darkBrown"
          id="burger-menu"
        >
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
