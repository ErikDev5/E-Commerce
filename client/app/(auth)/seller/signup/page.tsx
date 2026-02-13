import { Fragment } from "react";
import Hero from "@/signup/components/Hero/Hero";
import Form from "@/signup/components/Form/Form";
import styles from "@/app/(auth)/seller/main.module.scss";

export default function LoginPage() {
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
