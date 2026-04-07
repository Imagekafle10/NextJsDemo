"use server";
import { revalidatePath } from "next/cache";
import { CreateContact, deleteContact, updateContact } from "../api/contact";
import { error } from "console";
import { getSession } from "../_lib/session";
import { ContactType } from "../_components/_types/contact";

export const createContactAction = async (
  prevState: any,
  formData: FormData,
) => {
  if (!formData) {
    return { error: `Form Data is Missing` };
  }
  const user = await getSession();
  const newContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await CreateContact(newContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error Creating Contact", error);
    return { error: "Failed to Create Contact" };
  }
};

export const updateContactAction = async (
  prevState: any,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  const user = await getSession();
  const updatedContact: ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
  };

  try {
    await updateContact(id, updatedContact);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error Updating Contact", error);
    return { error: "Failed to Update Contact" };
  }
};

export const deleteContactAction = async (
  prevState: any,
  formData: FormData,
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error Deleting Contact", error);
    return { error: "Failed to Delete Contact" };
  }
};
