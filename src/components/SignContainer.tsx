import { ReactNode } from "react";

type SignContainerPtops = {
  children: ReactNode;
};

export default function SignContainer({ children }: SignContainerPtops) {
  return (
    <div className="flex flex-col items-center bg-red-600 rounded-3xl p-2">
      {children}
    </div>
  );
}
