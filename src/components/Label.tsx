import { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
};

export default function Label({ children }: LabelProps) {
  return <label className="flex flex-col justify-between">{children}</label>;
}
