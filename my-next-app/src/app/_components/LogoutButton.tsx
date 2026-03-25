"use client";
import React from "react";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logoutAction();
      //Redirect Action
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("Logout Failed:", error);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-red-300  rounded-md hover:bg-red-600 transition-colors cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
