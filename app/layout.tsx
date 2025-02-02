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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-primary">
        <Header />

        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
