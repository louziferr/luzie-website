import { sendMail } from "@/lib/mail";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
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
      <h1 className="text-white text-left">Kontaktformular</h1>
      <div className="p-2">
        {success && (
          <div className="bg-teal-500 p-4 rounded mt-2 shadow-md shadow-black">
            <p className="text-white">Nachricht wurde erfolgreich versendet!</p>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-2">
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
            className="p-2"
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
            className="p-2"
          />
        </div>
        <div className="flex flex-col font-mono mb-8">
          <label htmlFor="nachricht" className="text-white">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            className="p-2"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-sky-400 p-2 w-1/2 rounded text-white font-mono"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
}
