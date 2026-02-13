import Link from "next/link";
import styles from "@/app/(auth)/seller/main.module.scss";

export default function SignupForm() {
  return (
    <div className={styles["form"]}>
      <div className={styles["form__title"]}>
        <div>
          <div>Đăng ký</div>
        </div>
      </div>
      <div className={styles["form__content"]}>
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
          <button className={styles["form__content__button"]}>Tiếp theo</button>
        </form>
      </div>
      <div className={styles["form__footer"]}>
        <div>
          Bạn đã có tài khoản?
          <Link href='/seller/login'>Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}
