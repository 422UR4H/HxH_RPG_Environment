"use server";

import api from "@/services/api";
import { redirect } from "next/navigation";

export default async function signUpAction(
  _prevState: any,
  formData: FormData
) {
  const password = formData.get("password");
  const repeatPass = formData.get("repeat-password");
  if (password !== repeatPass) {
    return { error: "Passwords do not match!" };
  }
  formData.delete("repeat-password");

  const response = await api.signUpPlayer(formData);
  const data = await response.json();
  if (response.ok) {
    redirect("/sign-in");
  } else {
    return { error: data.message };
  }
}
