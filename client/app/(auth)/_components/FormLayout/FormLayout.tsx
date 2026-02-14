import { ReactNode } from "react";
import StepIndicator from "@/auth/components/StepIndicator/StepIndicator";
import PrevButton from "@/auth/components/PrevButton/PrevButton";
import FormHeading from "@/auth/components/FormLayout/FormHeading";
import styles from "@/auth/components/FormLayout/FormLayout.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export default function FormLayout({ children, title }: Props) {
  return (
    <section>
      <div className={styles["verify-container"]}>
        <div className={styles["verify-content"]}>
          <StepIndicator />
          <div className={styles["verify-card"]}>
            {/* Heading */}
            <div className={styles["verify-card-heading"]}>
              <div className={styles["verify-card-heading-wrap"]}>
                <PrevButton />
                <FormHeading title={title} />
              </div>
            </div>
            {/* Form */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
