"use server";

import api from "@/services/api";
import { redirect } from "next/navigation";

export default async function signInAction(
  _prevState: any,
  formData: FormData
) {
  const response = await api.signIn(formData);
  const data = await response.json();

  const { user, token } = data;
  user.token = token;

  if (response.ok) {
    return { user };
    // redirect('/');
  } else {
    return { error: data.message };
  }
}
