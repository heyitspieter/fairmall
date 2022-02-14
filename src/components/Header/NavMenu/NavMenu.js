import Svg from "src/components/Svg/Svg";

import styles from "src/components/Header/NavMenu/NavMenu.module.scss";

function NavMenu() {
  return (
    <div role="navigation" className={styles.container}>
      <button>
        <Svg symbol="search" />
      </button>
      <button>
        <Svg symbol="person" />
      </button>
      <button>
        <Svg symbol="shopping-basket" />
      </button>
    </div>
  );
}

export default NavMenu;
