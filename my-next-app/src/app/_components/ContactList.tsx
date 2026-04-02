import React from "react";
import { ContactType } from "./_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

function ContactList({ contacts }: { contacts: ContactType[] }) {
  console.log(typeof contacts);

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="p-4 bg-white shadow rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
        >
          {/* Contact info */}
          <div>
            <p className="font-semibold text-gray-800">{contact.name}</p>
            <p className="text-gray-500 text-sm">{contact.email}</p>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Link
              href={`/contact/edit/${contact.id}`}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <FiEdit />
              Edit
            </Link>
            <DeleteButton action={deleteContactAction} contact={contact} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
