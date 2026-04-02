import { ContactType } from "../_components/_types/contact";
import { deleteApi, getApi, postApi, putApi } from "../lib/axiosInstance";

export const getContacts = async (userId: string) => {
  const response = await getApi({
    url: `/contacts?userId:${userId}`,
    params: undefined, // pass query here
  });
  return response;
};

export const getContactById = async (id: string) => {
  const response = await getApi({ url: `/contacts/${id}` });
  return response.data;
};

export const CreateContact = async (contact: ContactType) => {
  const response = await postApi({ url: `/contacts`, body: contact });
  return response.data;
};

export const updateContact = async (id: string, contact: ContactType) => {
  const response = await putApi({ url: `/contacts/${id}`, body: contact });
  return response.data;
};

export const deleteContact = async (id: string) => {
  const response = await deleteApi({ url: `/contacts/${id}` });
  return response.data;
};
