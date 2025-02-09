"use client";
import ContactForm from "@/components/contact_form";
import { sendMail } from "@/lib/mail";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Kontakt() {
  return (
    <>
      <div className="pt-[40px] min-h-screen md:pt-[90px] bg-computer md:p-4 flex items-start justify-start flex-col">
        <div className="p-4 max-w-[600px]">
          <div>
            <h1 className="text-left py-8 text-3xl md:text-6xl text-white">
              Kontakt
            </h1>
            <p className="text-white">
              Ob du bereits eine konkrete Idee hast oder noch nach der richtigen
              Lösung suchst – kontaktiere mich gerne.
              <br />
              <br />
              <br />
              Luzie Ahrens
            </p>

            <div className="p-1 flex items-center">
              <div className="relative flex">
                <div className="bg-sky-100 text-xl md:text-3xl font-alfa mr-3 rounded-full w-[10px] h-[10px]"></div>
                <span className="absolute inline-flex w-[10px] h-[10px] animate-ping rounded-full bg-sky-100 opacity-75"></span>
              </div>
              <p className="md:text-lg text-white">luzie.ahrens@gmail.com</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
