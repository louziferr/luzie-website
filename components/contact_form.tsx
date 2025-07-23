import { sendMail } from "@/lib/mail";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  english: boolean;
}

export default function ContactForm({ english = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMail(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const sendeFormular = (name: string, email: string, nachricht: string) => {
    // Hier könntest du z.B. die Daten an einen Server senden
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Nachricht:", nachricht);
  };

  return (
    <div className="mt-8 p-2">
      <h1 className="text-white text-left">
        {english ? "Contact form" : "Kontakformular"}
      </h1>
      <div className="p-2">
        {success && (
          <div className="bg-teal-500 p-4 rounded mt-2 shadow-md shadow-black">
            <p className="text-white">
              {english
                ? "Message was send successfully!"
                : "Nachricht wurde erfolgreich versendet!"}
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-2 animate-fade-up animate-delay-200"
      >
        <div className="flex flex-col font-mono mb-4">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="p-2 font-saira rounded shadow-inner shadow-darkBlue"
          />
        </div>
        <div className="flex flex-col font-mono mb-4">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="p-2 font-saira rounded shadow-inner shadow-darkBlue"
          />
        </div>
        <div className="flex flex-col font-mono mb-8">
          <label htmlFor="nachricht" className="text-white">
            {english ? "Message" : "Nachricht"}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            className="p-2 font-saira rounded shadow-inner shadow-darkBlue"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue p-2 w-1/2 rounded text-white font-mono border-2 border-white animate-pulse"
          >
            {english ? "Send" : "Absenden"}
          </button>
        </div>
      </form>
    </div>
  );
}
