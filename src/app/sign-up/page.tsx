import signUpAction from "@/actions/signUp";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import SignContainer from "@/components/SignContainer";
import SubmitButton from "@/components/SubmitButton";
import Link from "next/link";

export default async function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignContainer>
        <Form action={signUpAction}>
          <Label>
            Nick
            <Input
              name="nick"
              type="text"
              placeholder="nick"
              maxLength={12}
              required
            />
          </Label>
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
          <Label>
            Repeat Password
            <Input
              name="repeat-password"
              type="password"
              placeholder="repeat password"
              minLength={3}
              maxLength={32}
              required
            />
          </Label>
          <SubmitButton>Register</SubmitButton>
        </Form>
        <Link href="/sign-in">Switch back to login!</Link>
      </SignContainer>
    </main>
  );
}
