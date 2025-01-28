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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarVisible, setsideBarVisible] = useState(false);

  function showSideBar() {
    setsideBarVisible(true);
  }

  function hideSideBar() {
    setsideBarVisible(false);
  }

  const location = usePathname();

  useEffect(() => {
    setsideBarVisible(false);
  }, [location]);

  return (
    <html lang="de">
      <body className="bg-primary">
        <Header
          sideBarVisible={sideBarVisible}
          handleBurgerClick={showSideBar}
        />

        <div
          className={sideBarVisible ? "brightness-50" : "brightness-100"}
          onClick={hideSideBar}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
