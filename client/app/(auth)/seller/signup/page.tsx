"use client";

import { Fragment } from "react";
import Hero from "@/signup/components/Hero/Hero";
import Form from "@/signup/components/Form/Form";
import { useSellerContext } from "@/contexts/SellerSignupContext";
import styles from "@/app/(auth)/seller/main.module.scss";
import VerifyPhoneSection from "./_components/VerifyPhoneSection/VerifyPhoneSection";

export default function LoginPage() {
  const { step } = useSellerContext();

  // Verify phone number
  if (step === 1) {
    return <VerifyPhoneSection />;
  }

  // Create new password

  // Complete

  //default
  return (
    <Fragment>
      <section className={styles["seller-register"]}>
        <div className={styles["seller-register__container"]}>
          <Hero />
          <Form />
        </div>
      </section>
    </Fragment>
  );
}
