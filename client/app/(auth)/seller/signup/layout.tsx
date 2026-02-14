import { Fragment, ReactNode } from "react";
import { SellerSignupProvider } from "@/contexts/SellerSignupContext";

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <SellerSignupProvider>{children}</SellerSignupProvider>
    </Fragment>
  );
}
