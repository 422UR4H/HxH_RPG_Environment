"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";
import { useFormState } from "react-dom";

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

type FormProps = PropsWithChildren<
  Omit<HTMLFormProps, "action"> & {
    action: (prevState: any, formData: FormData) => Promise<any>;
  }
>;

export function Form(props: FormProps) {
  const [state, formAction] = useFormState(props.action, { error: null });
  return (
    <form
      {...props}
      action={formAction}
      className="flex flex-col items-center justify-between gap-4 p-24"
    >
      {state?.error && <h1>{state.error}</h1>}
      {/* <h1>{state?.error ? state.error : " "}</h1> */}
      {props.children}
    </form>
  );
}
