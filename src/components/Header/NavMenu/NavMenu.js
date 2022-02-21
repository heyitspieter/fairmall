import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Header/NavMenu/NavMenu.module.scss";

function NavMenu() {
  const router = useRouter();

  return (
    <div role="navigation" className={styles.container}>
      <button>
        <Svg symbol="search" />
      </button>
      <button>
        <Svg symbol="person" />
      </button>
      <button onClick={() => router.push("/basket")}>
        <Svg symbol="shopping-basket" />
      </button>
    </div>
  );
}

export default NavMenu;
