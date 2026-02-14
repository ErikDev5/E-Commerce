import StepIndicator from "@/signup/components/StepIndicator/StepIndicator";
import PrevButton from "@/signup/components/VerifyPhoneSection/components/PrevButton";
import Form from "@/signup/components/VerifyPhoneSection/components/Form";

import styles from "@/signup/components/VerifyPhoneSection/VerifyPhoneSection.module.scss";

export default function VerifyPhoneSection() {
  return (
    <section>
      <div className={styles["verify-phone-container"]}>
        <div className={styles["verify-phone-content"]}>
          <StepIndicator />
          <div className={styles["verify-card"]}>
            {/* Heading */}
            <div className={styles["verify-card-heading"]}>
              <div className={styles["verify-card-heading-wrap"]}>
                <PrevButton />
                <div className={styles["verify-card-heading-label"]}>
                  <div>Nhập mã xác nhận</div>
                </div>
              </div>
            </div>
            {/* Form */}
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
