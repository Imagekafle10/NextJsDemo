"use client";
import React, { useActionState } from "react";
import { ContactType } from "./_types/contact";
import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action, null);
  return (
    <form action={formAction} className="inline">
      <input type="hidden" name="id" value={contact?.id} />
      <button
        type="submit"
        className="flex items-center gap-2  rounded-xl 
                text-red-400 font-medium 
               hover:text-red-600 active:scale-95 
               transition-all duration-200 cursor-pointer "
        onClick={(e) => {
          if (!confirm("Do you want to delete contact?")) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2 className="text-lg" />
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
