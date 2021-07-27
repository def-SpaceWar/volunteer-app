import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.centerSearch}>
        <form action="/login" method="GET">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className={styles.centerLogo}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/hackathon_logo.png"
            alt="VolunteerUP"
            width="100%"
            height="100%"
          />
        </Link>
      </div>
      <div className={styles.centerLogo}>
        <ui className={styles.navLinks}>
          <li>
            <Link href="/login">
              <p className={styles.navItem}>Login</p>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <p className={styles.navItem}>Sign Up</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className={styles.navItem}>Projects</p>
            </Link>
          </li>
        </ui>
      </div>
    </div>
  );
}
