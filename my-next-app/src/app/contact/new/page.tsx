import ContactForm from "@/app/_components/ContactForm";
import { createContactAction } from "@/app/actions/contact";
import React from "react";

function NewContactPage() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create New Contact
        </h1>

        {/* Form */}
        <ContactForm action={createContactAction} />
      </div>
    </div>
  );
}

export default NewContactPage;
