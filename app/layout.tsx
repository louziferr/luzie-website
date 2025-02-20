"use client";

import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import "@fontsource/alfa-slab-one";
import "@fontsource/ultra";
import "@fontsource/roboto";
import "@fontsource/saira";
import "@fontsource/anta";
import "@fontsource/jockey-one";
import "@fontsource/noto-sans-jp";
import "@fontsource/zen-dots";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const condition = pathname !== "/wortwahl";
  return (
    <html lang="de">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <title>Luzie Ahrens</title>
      </head>
      <body className="bg-primary w-full">
        {condition && <Header />}

        <div className="w-full">{children}</div>
        {condition && <Footer />}
      </body>
    </html>
  );
}
