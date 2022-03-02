import Link from "next/link";
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
        <div className={styles.dropdown}>
          <Link href="/account/profile">
            <a>
              <Svg symbol="person" />
              <span>Profile</span>
            </a>
          </Link>
          <Link href="/saved">
            <a>
              <Svg symbol="heart-outline" />
              <span>Saved Items</span>
            </a>
          </Link>
          <Link href="/orders">
            <a>
              <Svg symbol="bookmark" />
              <span>Orders</span>
            </a>
          </Link>
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </div>
      </button>
      <button onClick={() => router.push("/basket")}>
        <Svg symbol="shopping-basket" />
      </button>
      <button>
        <Svg symbol="menu" />
      </button>
    </div>
  );
}

export default NavMenu;
