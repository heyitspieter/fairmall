import Link from "next/link";
import Image from "next/image";

import styles from "src/components/Logo/Logo.module.scss";

function Logo() {
  return (
    <Link href="/">
      <a className={styles.wrapper}>
        <Image src="/logo.svg" layout="fill" alt="Fairmall" />
      </a>
    </Link>
  );
}

export default Logo;
