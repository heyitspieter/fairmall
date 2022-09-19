import className from "classnames";
import { useRouter } from "next/router";
import Logo from "src/components/Logo/Logo";
import NavMenu from "src/components/Header/NavMenu/NavMenu";
import NavLinks from "src/components/Header/NavLinks/NavLinks";

import styles from "src/components/Header/Header.module.scss";

function Header() {
  const router = useRouter();

  const containerClass = className({
    [styles.container]: true,
    [styles.default]: router.pathname !== "/",
  });

  return (
    <div className={containerClass}>
      <NavLinks />
      <div className={styles.search}>
        <Logo />
      </div>
      <NavMenu />
    </div>
  );
}

export default Header;
