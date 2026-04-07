import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import React from "react";

const EditContactPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const contact = await getContactById(id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Edit Contact
        </h1>

        <ContactForm action={updateContactAction} contact={contact} />
      </div>
    </div>
  );
};

export default EditContactPage;
