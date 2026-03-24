"use server";
import { redirect } from "next/navigation";
import { UserType } from "../_components/_types/user";
import { getApi } from "../lib/axiosInstance";

export const loginAction = async (formdata: FormData) => {
  let email = formdata.get("email");
  let password = formdata.get("password");
  try {
    const response = await getApi({
      url: `/users?email=${email}&password=${password}`,
    });
    // console.log(response);
    const user: UserType = response?.[0];
    if (!user) throw new Error("Invalid Credentials");

    //set User in the Cookies
  } catch (error: any) {
    console.log(error.message);

    throw new Error("Failed to login");
  }
  redirect("/contact");
};

export const logout = async () => {
  redirect("/login");
};
