"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useFormStatus } from "react-dom";
import { ThreeDots } from "react-loader-spinner";

type SubmitButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function SubmitButton(props: SubmitButtonProps) {
  const { disabled, ...otherProps } = props;
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-white rounded-2xl shadow-lg shadow-neutral-700 py-2 px-8 text-black text-xl mt-7"
      {...otherProps}
      disabled={status.pending || disabled}
    >
      {status.pending ? (
        <ThreeDots
          height="1.75rem"
          color="rgb(220 38 38 / 1)"
          ariaLabel="three-dots-loading"
        />
      ) : (
        props.children
      )}
    </button>
  );
}
