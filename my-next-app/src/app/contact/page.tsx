import React from "react";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

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

  return <div>Contacts Page</div>;
};

export default ContactPage;
