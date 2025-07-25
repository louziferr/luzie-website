"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SingleLevelDropdownMenu } from "./dropdown";
import { SideBarDropDown } from "./sidebar_dropdown";
import { usePathname } from "next/navigation";

interface HeaderProps {
  english: boolean;
}
export default function Header({ english }: HeaderProps) {
  const [sideBarVisible, setsideBarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownProjekte, setShowDropdownProjekte] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function toggleDropdownProjekte() {
    setShowDropdownProjekte(!showDropdownProjekte);
  }

  function showSideBar() {
    setsideBarVisible(true);
  }

  function hideSideBar() {
    setsideBarVisible(false);
    setShowDropdown(false);
  }

  const location = usePathname();

  function handleClick() {
    showSideBar();
  }

  const headerHeight = 90;

  let headerItems: string[][] = [
    ["Über mich", "/ueber_mich"],
    ["Kontakt", "/kontakt"],
  ];

  if (english) {
    headerItems = [
      ["About me", "/eng/about-me"],
      ["Contact", "/eng/contact"],
    ];
  }

  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [topShiftString, setTopShiftString] = useState("-0px");
  const [topShift, setTopShift] = useState(0);

  const [atTop, setAtTop] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    setsideBarVisible(false);
    setShowDropdown(false);
    setShowDropdownProjekte(false);
    setTopShift(0);
    setTopShiftString(`-0px`);
  }, [location]);

  useEffect(() => {
    function handleScroll() {
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
          if (showDropdownProjekte) {
            toggleDropdownProjekte();
          }
        }
      }

      setTopShiftString(`-${topShift}px`);
    }

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className="fixed w-full z-50" style={{ top: topShiftString }}>
      <div className="bg-white shadow-black shadow-md flex animate-fade-down animate-delay-1000 justify-between items-center px-5 py-2.5 max-h-[90px]">
        <div className="p-2">
          <Link href="/">
            <h1 className="p-0 text-darkBlue">LA</h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <div>
            <Link href={english ? "/eng" : "/"} className="nav-link">
              {english ? "Home" : "Startseite"}
            </Link>
          </div>
          <div className="border-r-2 border-l-2 border-gray-400">
            <SingleLevelDropdownMenu
              buttonLabel={english ? "Services" : "Leistungen"}
              showDropdown={showDropdown}
              toggleDropdown={toggleDropdown}
              items={
                english
                  ? [
                      { title: "Web-Development", url: "/eng/web-development" },
                      { title: "Teaching", url: "/eng/teaching" },
                      { title: "Programming", url: "/eng/programming" },
                    ]
                  : [
                      { title: "Web-Entwicklung", url: "/webentwicklung" },
                      { title: "Lehre", url: "/lehre" },
                      { title: "Programmierung", url: "/programmierung" },
                    ]
              }
            />
          </div>
          {!english && (
            <div>
              <SingleLevelDropdownMenu
                buttonLabel={english ? "Projects" : "Projekte"}
                showDropdown={showDropdownProjekte}
                toggleDropdown={toggleDropdownProjekte}
                items={[
                  { title: "Wortwahl 💬", url: "/projekte/wortwahl" },
                  {
                    title: "Skatespace 🖥",
                    url: "http://skatespace.vercel.app",
                    newTab: true,
                  },
                ]}
              />
            </div>
          )}

          {headerItems.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item[1]}
              className="nav-link border-gray-400"
            >
              {item[0]}
            </Link>
          ))}

          <div className="flex justify-around border-2 rounded-md p-1 text-[12px]">
            <Link href="/" className="cursor-pointer">
              <p
                className={
                  english
                    ? "font-thin pr-1 text-sm"
                    : "font-extrabold pr-1 text-sm"
                }
              >
                DE
              </p>
            </Link>
            <Link href="/eng" className="cursor-pointer">
              <p
                className={
                  english ? "font-bold pl-2 text-sm" : "font-thin pl-2 text-sm"
                }
              >
                ENG
              </p>
            </Link>
          </div>
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
        <div className="fixed top-0 animate-fade left-0 w-full z-50 h-full bg-black bg-opacity-50">
          <div
            className="fixed top-0 left-0 w-1/3 h-full"
            onClick={hideSideBar}
          ></div>
          <div
            className="bg-white animate-fade-left text-primary space-y-5 px-4 py-2 
        fixed top-0 right-0 w-2/3 h-full z-50 flex flex-col border-darkBrown"
            id="burger-menu"
          >
            <p className="text-4xl ml-4 mt-4 text-darkBlue font-anta">LA</p>
            <Link
              href={english ? "/eng" : "/"}
              className="nav-link text-xl mt-4 border-b-2 pb-2 border-gray-300"
            >
              {english ? "Home" : "Startseite"}
            </Link>
            <SideBarDropDown
              buttonLabel={english ? "Services" : "Leistungen"}
              showDropdown={showDropdown}
              toggleDropdown={toggleDropdown}
              items={
                english
                  ? [
                      { title: "Web-Development", url: "/eng/web-development" },
                      { title: "Teaching", url: "/eng/teaching" },
                      { title: "Programming", url: "/eng/programming" },
                    ]
                  : [
                      { title: "Web-Entwicklung", url: "/webentwicklung" },
                      { title: "Lehre", url: "/lehre" },
                      { title: "Programmierung", url: "/programmierung" },
                    ]
              }
            />

            {!english && (
              <SideBarDropDown
                buttonLabel={english ? "Projects" : "Projekte"}
                showDropdown={showDropdownProjekte}
                toggleDropdown={toggleDropdownProjekte}
                items={[
                  {
                    title: "Wortwahl 💬",
                    url: "/projekte/wortwahl",
                    newTab: false,
                  },
                  {
                    title: "Skatespace 🖥",
                    url: "http://skatespace.vercel.app",
                    newTab: true,
                  },
                ]}
              />
            )}

            {headerItems.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item[1]}
                className="nav-link text-xl mt-4 border-b-2 pb-2 border-gray-300"
              >
                {item[0]}
              </Link>
            ))}

            <div className="flex justify-around border-2 rounded-md p-1 text-[12px]">
              <Link href="/" className="cursor-pointer">
                <p
                  className={
                    english
                      ? "font-thin pr-1 text-sm"
                      : "font-extrabold pr-1 text-sm"
                  }
                >
                  DE
                </p>
              </Link>
              <Link href="/eng" className="cursor-pointer">
                <p
                  className={
                    english
                      ? "font-bold pl-2 text-sm"
                      : "font-thin pl-2 text-sm"
                  }
                >
                  ENG
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
