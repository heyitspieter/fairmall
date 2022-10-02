import Link from "next/link";
import className from "classnames";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useContext, useState, useRef } from "react";
import { SidedrawerContext } from "src/context/SidedrawerContext";
import SearchDropdown from "src/components/SearchDropdown/SearchDropdown";

import styles from "src/components/Header/NavMenu/NavMenu.module.scss";

function NavMenu() {
  const router = useRouter();

  const inputRef = useRef(null);

  const token = localStorage.getItem("token");

  const sidedrawer = useContext(SidedrawerContext);

  const [searchResults, setSearchResults] = useState([]);

  const [inputFocused, setInputFocused] = useState(false);

  const [inputControls, setInputControls] = useState({
    search: {
      value: "",
    },
  });

  const searchClass = className({
    [styles.search]: true,
    [styles.focused]: inputFocused,
  });

  const onBlur = () => {
    setInputFocused(false);
  };

  const onFocus = () => {
    setInputFocused(true);
    inputRef.current?.focus();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.localStorage.clear();
    router.push("/");
  };

  const onClickSearchBtn = () => {
    if (!inputFocused) {
      onFocus();
    }

    // Handle search logic here
  };

  const inputChangeHandler = (e) => {
    // Input validation here


    // Set input value after validation
    setInputControls((prevState) => ({
      ...prevState,
      search: {
        ...prevState.search,
        value: e.target.value,
      },
    }));
  };

  const searchMode = inputFocused && searchResults.length;

  return (
    <div role="navigation" className={styles.container}>
      <div className={searchClass}>
        <input
          type="text"
          ref={inputRef}
          onBlur={onBlur}
          value={inputControls.search.value}
          onChange={(e) => inputChangeHandler(e)}
          placeholder="Search furniture, household items, art and craft"
        />
        <button onClick={onClickSearchBtn}>
          <Svg symbol="search" />
        </button>
        {searchMode ? <SearchDropdown /> : null}
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
