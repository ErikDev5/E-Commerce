"use client";

import { useSellerContext } from "@/contexts/SellerSignupContext";
import styles from "@/auth/components/SubmitButton/SubmitButton.module.scss";

type Props = {
  label: string;
};

export default function SubmitButton({ label }: Props) {
  const { nextStep } = useSellerContext();

  return (
    <button
      onClick={() => {
        nextStep();
      }}
      className={styles["submit-button"]}>
      {label}
    </button>
  );
}
