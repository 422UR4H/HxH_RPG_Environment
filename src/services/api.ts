function signIn(formData: FormData) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });
}

function signUpPlayer(formData: FormData) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nick: formData.get("nick"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: "PLAYER",
    }),
  });
}

const api = {
  signIn,
  signUpPlayer,
};
export default api;
