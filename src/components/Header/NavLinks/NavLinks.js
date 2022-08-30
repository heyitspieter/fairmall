import ActiveLink from "src/components/ActiveLink/ActiveLink";

import styles from "src/components/Header/NavLinks/NavLinks.module.scss";

function NavLinks() {
  return (
    <div role="navigation" className={styles.container}>
      <ActiveLink href="/shop" activeClassName={styles.active}>
        Shop
      </ActiveLink>
      <ActiveLink href="/about-us" activeClassName={styles.active}>
        About Us
      </ActiveLink>
      <ActiveLink href="/inspirations" activeClassName={styles.active}>
        Inspiration
      </ActiveLink>
      <ActiveLink href="/contact" activeClassName={styles.active}>
        Contact Us
      </ActiveLink>
    </div>
  );
}

export default NavLinks;
