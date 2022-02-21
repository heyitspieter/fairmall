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
      <ActiveLink href="/inspiration" activeClassName={styles.active}>
        Inspiration
      </ActiveLink>
    </div>
  );
}

export default NavLinks;
