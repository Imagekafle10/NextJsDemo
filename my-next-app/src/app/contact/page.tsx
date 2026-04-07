import React from "react";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import ContactList from "../_components/ContactList";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Please! login to view contacts
          </h2>
          <a
            href="/login"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const contacts = await getContacts(user?.id);
  console.log(contacts);

  if (!contacts || contacts.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">
            Please add Contact to view contacts List
          </h2>
          <a
            href="/contact/new"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Add Contact
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Your Contacts
          </h1>

          {/* Add Contact link */}
          <div className="mb-6 flex ">
            <a
              href="/contact/new"
              className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
            >
              Add Contact
            </a>
          </div>
        </div>

        {/* Contact list */}
        <div className="bg-white shadow rounded p-4">
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
