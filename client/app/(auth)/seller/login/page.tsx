import Hero from "@/login/components/Hero/Hero";
import Form from "@/login/components/Form/Form";
import styles from "@/app/(auth)/seller/main.module.scss";

export default function SignupPage() {
  return (
    <section>
      <div className={styles["seller-login"]}>
        <Hero />
        <Form />
      </div>
    </section>
  );
}
