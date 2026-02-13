import Link from "next/link";
import styles from "@/signup/components/SignupForm/SignupForm.module.scss";

export default function SignupForm() {
  return (
    <div className={styles["signup-form"]}>
      <div className={styles["signup-form__title"]}>
        <div>
          <div>Đăng ký</div>
        </div>
      </div>
      <div className={styles["signup-form__content"]}>
        <form>
          <div className={styles["form-field"]}>
            <div className={styles["form-field__content"]}>
              <input
                className={styles["form-field__control"]}
                placeholder='Số điện thoại'
              />
            </div>
            <p className={styles["form-field__error"]}></p>
          </div>
          <button className={styles["signup-form__content__button"]}>
            Tiếp theo
          </button>
        </form>
      </div>
      <div className={styles["signup-form__footer"]}>
        <div>
          Bạn đã có tài khoản?
          <Link href='/seller/login'>Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}
