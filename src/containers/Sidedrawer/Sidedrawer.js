import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { SidedrawerContext } from "src/context/SidedrawerContext";

import styles from "src/containers/Sidedrawer/Sidedrawer.module.scss";

function Sidedrawer() {
  const ref = useRef();

  const router = useRouter();

  const sidedrawer = useContext(SidedrawerContext);

  const animConfig = {
    nodeRef: ref,
    mountOnEnter: true,
    unmountOnExit: true,
    in: sidedrawer.open,
    timeout: { enter: 300, exit: 300 },
    classNames: {
      enter: "",
      enterActive: styles.open,
      exit: "",
      exitActive: styles.close,
    },
  };

  return (
    <CSSTransition {...animConfig}>
      <>
        <div
          onClick={() => sidedrawer.toggle()}
          className={styles.backdrop}
        ></div>
        <div ref={ref} className={styles.container}>
          <div className={styles.emblem}>
            <div>
              <Image src="/logo.svg" width={44} height={44} alt="Fairmall" />
            </div>
            <span>
              fair<span>mall</span>
            </span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__list_item}>
                <Link href="/shop">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.nav__list_link}
                  >
                    Shop
                  </a>
                </Link>
              </li>
              <li className={styles.nav__list_item}>
                <Link href="/about-us">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.nav__list_link}
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li className={styles.nav__list_item}>
                <Link href="/inspiration">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.nav__list_link}
                  >
                    Inspiration
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={styles.menu}>
            <h3>My Account</h3>
            <ul className={styles.menu__list}>
              <li className={styles.menu__list_item}>
                <Link href="/account/profile">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.menu__list_link}
                  >
                    <Svg symbol="person" />
                    <span>Profile</span>
                  </a>
                </Link>
              </li>
              <li className={styles.menu__list_item}>
                <Link href="/saved">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.menu__list_link}
                  >
                    <Svg symbol="heart-outline" />
                    <span>Saved Items</span>
                  </a>
                </Link>
              </li>
              <li className={styles.menu__list_item}>
                <Link href="/orders">
                  <a
                    onClick={() => sidedrawer.toggle()}
                    className={styles.menu__list_link}
                  >
                    <Svg symbol="bookmark" />
                    <span>Orders</span>
                  </a>
                </Link>
              </li>
            </ul>
            <button
              onClick={() => {
                router.push("/signin");
                sidedrawer.toggle();
              }}
            >
              Sign In
            </button>
          </nav>
        </div>
      </>
    </CSSTransition>
  );
}

export default Sidedrawer;
