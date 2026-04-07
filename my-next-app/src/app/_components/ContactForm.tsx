"use client";
import React, { useActionState, useEffect } from "react";
import { ContactType } from "./_types/contact";
import { useRouter } from "next/navigation";
type ContactFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};
const ContactForm = ({ action, contact }: ContactFormProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, null);
  useEffect(() => {
    if (state?.success) {
      router.push("/contact");
    }
  }, [state, router]);
  return (
    <form action={formAction}>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="name"
          name="name"
          defaultValue={contact?.name || ""}
          placeholder="Enter your name"
          required
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={contact?.email || ""}
          placeholder="Enter your Email"
          required
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
