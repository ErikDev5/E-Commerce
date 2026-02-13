import { Fragment } from "react";
import SellerHero from "@/signup/components/SellerHero/SellerHero";
import SignupForm from "@/signup/components/SignupForm/SignupForm";
import styles from "@/app/(auth)/seller/signup/page.module.scss";

export default function LoginPage() {
  return (
    <Fragment>
      <section className={styles["seller-register"]}>
        <div className={styles["seller-register__container"]}>
          <SellerHero />
          <SignupForm />
        </div>
      </section>
    </Fragment>
  );
}
