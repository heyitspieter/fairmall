import Link from "next/link";
import className from "classnames";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useContext, useState } from "react";
import { SidedrawerContext } from "src/context/SidedrawerContext";

import styles from "src/components/Header/NavMenu/NavMenu.module.scss";

function NavMenu() {
  const router = useRouter();
  const token = localStorage.getItem("token");

  console.log('token',token)

  const sidedrawer = useContext(SidedrawerContext);

  const [inputFocused, setInputFocused] = useState(false);

  const searchClass = className({
    [styles.search]: true,
    [styles.focused]: inputFocused,
  });

  const onBlur = () => setInputFocused(false);

  const onFocus = () => setInputFocused(true);

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('getting here')
   localStorage.removeItem("token");
   localStorage.removeItem("user");
   window.localStorage.clear();
   router.push('/')
  }

  const onClickSearchBtn = () => {
    if (!inputFocused) {
      return onFocus();
    }

    // Handle search logic here
  };

  return (
    <div role="navigation" className={styles.container}>
      <div className={searchClass}>
        <input value="" type="text" onBlur={onBlur} onChange={() => { }} placeholder="Search furniture, household items, art and craft" />
        <button onClick={onClickSearchBtn}>
          <Svg symbol="search" />
        </button>
      </div>
      <button>
        <Svg symbol="person" />
        {token ? (
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
            <a href="" onClick={(e) => handleLogout(e)}>
              <a>Sign out</a>
            </a>
          </div>
        ) : (
          <div className={styles.dropdown}>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </div>
        )}
      </button>
      <button onClick={() => router.push("/basket")}>
        <Svg symbol="shopping-basket" />
      </button>
      <button onClick={() => sidedrawer.toggle()}>
        <Svg symbol="menu" />
      </button>
    </div>
  );
}

export default NavMenu;
