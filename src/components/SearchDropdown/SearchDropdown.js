import Svg from "src/components/Svg/Svg";

import styles from "src/components/SearchDropdown/SearchDropdown.module.scss";

function SearchDropdown() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <button>
            <div>
              <Svg symbol="search" />
            </div>
            <span>White Caftan</span>
          </button>
        </div>
        <div className={styles.item}>
          <button>
            <div>
              <Svg symbol="search" />
            </div>
            <span>White Caftan</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown;
