"use client";

import { useSellerContext } from "@/contexts/SellerSignupContext";
import styles from "@/auth/components/SubmitButton/SubmitButton.module.scss";

type Props = {
  label: string;
};

export default function SubmitButton({ label }: Props) {
  const { step, nextStep } = useSellerContext();

  return (
    <button
      onClick={() => {
        nextStep();
      }}
      type='button'
      className={`${styles["submit-button"]} ${step === 3 && styles["not-allowed"]}`}>
      {label}
    </button>
  );
}
