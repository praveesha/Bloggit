import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/themeToggle";
import AuthLinks from "../authLinks/authLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt="Facebook Logo" width={24} height={24} />
        <Image src="/instagram.png" alt="Facebook Logo" width={24} height={24} />
        <Image src="/tiktok.png" alt="Facebook Logo" width={24} height={24} />
        <Image src="/youtube.png" alt="Facebook Logo" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={200} height={100} />
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;