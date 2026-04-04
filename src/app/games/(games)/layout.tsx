import { NavigateBack } from "@/components/common/navigate-back";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div>
      <NavigateBack href="/games" text="All Games" classsName="w-fit mb-4" />
      {children}
    </div>
  );
}
