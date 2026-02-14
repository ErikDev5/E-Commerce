"use client";

import { useSellerContext } from "@/contexts/SellerSignupContext";
import styles from "@/signup/components/StepIndicator/StepIndicator.module.scss";

export default function StepIndicator() {
  const { step } = useSellerContext();

  return (
    <div className={styles["verify-phone-steps"]}>
      {/* step 1 */}
      <div
        className={`${styles["verify-phone-step"]} ${step === 1 && styles["active"]}`}>
        <div>1</div>
        <p>Xác minh số điện thoại</p>
      </div>
      <div className={styles["verify-phone-step-arrow"]}></div>

      {/* step 2 */}
      <div
        className={`${styles["verify-phone-step"]} ${step === 2 && styles["active"]}`}>
        <div>2</div>
        <p>Tạo mật khẩu</p>
      </div>
      <div className={styles["verify-phone-step-arrow"]}></div>

      {/* step 3 */}
      <div
        className={`${styles["verify-phone-step"]} ${step === 3 && styles["active"]}`}>
        <div>
          <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x='0' y='0'>
            <g>
              <path d='m6.5 13.6c-.2 0-.5-.1-.7-.2l-5.5-4.8c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l4.7 4 6.8-9.4c.3-.4.9-.5 1.4-.2.4.3.5 1 .2 1.4l-7.4 10.3c-.2.2-.4.4-.7.4 0 0 0 0-.1 0z'></path>
            </g>
          </svg>
        </div>
        <p>Hoàn thành</p>
      </div>
    </div>
  );
}
