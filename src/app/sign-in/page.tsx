import Link from "next/link.js";
import { Form } from "@/components/Form";
import signInAction from "@/actions/signIn";
import SignContainer from "@/components/SignContainer";
import SubmitButton from "@/components/SubmitButton";
import Label from "@/components/Label";
import Input from "@/components/Input";

export default async function SignInPage() {
  // TODO: with cookies
  // const { token, login } = useUser();
  // useEffect(() => {
  //   if (token) redirect("/timeline");
  // }, [token]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignContainer>
        <Form action={signInAction}>
          <Label>
            E-mail
            <Input
              name="email"
              type="email"
              placeholder="e-mail"
              maxLength={64}
              required
            />
          </Label>
          <Label>
            Password
            <Input
              name="password"
              type="password"
              placeholder="password"
              minLength={3}
              maxLength={32}
              required
            />
          </Label>
          <SubmitButton>Login</SubmitButton>
        </Form>
        <Link href="/sign-up">First time? Create an account!</Link>
      </SignContainer>
    </main>
  );
}
