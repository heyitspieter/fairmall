import Link from "next/link";

import styles from "src/components/Header/NavLinks/NavLinks.module.scss";

function NavLinks() {
  return (
    <div role="navigation" className={styles.container}>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      <Link href="/about-us">
        <a>About Us</a>
      </Link>
      <Link href="/inspiration">
        <a>Inspiration</a>
      </Link>
    </div>
  );
}

export default NavLinks;
