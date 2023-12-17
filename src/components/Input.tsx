import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputProps = PropsWithChildren<HTMLInputProps>;

export default function Input(props: InputProps) {
  return <input {...props} className="rounded py-2 px-3 text-black" />;
}
