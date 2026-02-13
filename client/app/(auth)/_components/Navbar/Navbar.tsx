import Logo from "@/auth/components/Logo/Logo";
import NavbarLabel from "@/auth/components/NavbarLabel/NavbarLabel";
import NavLink from "@/auth/components/NavLink/NavLink";
import styles from "@/auth/components/Navbar/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar-content"]}>
        <div className={styles["navbar-brand"]}>
          <Logo />
          <NavbarLabel />
        </div>
        <NavLink />
      </div>
    </nav>
  );
}
