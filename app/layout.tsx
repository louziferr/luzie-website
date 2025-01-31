"use client";

import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "@fontsource/alfa-slab-one";
import "@fontsource/ultra";
import "@fontsource/roboto";
import "@fontsource/saira";
import "@fontsource/anta";
import "@fontsource/jockey-one";
import "@fontsource/noto-sans-jp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarVisible, setsideBarVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function showSideBar() {
    setsideBarVisible(true);
  }

  function hideSideBar() {
    setsideBarVisible(false);
    setShowDropdown(false);
    console.log("HIDING");
  }

  const location = usePathname();

  useEffect(() => {
    setsideBarVisible(false);
    setShowDropdown(false);
  }, [location]);

  return (
    <html lang="de">
      <body className="bg-primary">
        <Header
          sideBarVisible={sideBarVisible}
          handleBurgerClick={showSideBar}
          hideSideBar={hideSideBar}
          showDropdown={showDropdown}
          toggleDropdown={toggleDropdown}
        />

        <div onClick={hideSideBar}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
