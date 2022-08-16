import className from "classnames";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";

import styles from "src/containers/MobileSearch/MobileSearch.module.scss";

function MobileSearch() {
  const router = useRouter();

  const containerClass = className({
    [styles.container]: true,
    [styles.bg__pink]: router.pathname === "/",
  });

  return (
    <div className={containerClass}>
      <div className={styles.wrapper}>
        <input
          value=""
          type="text"
          onChange={() => {}}
          placeholder="Search furniture, household items, art...."
        />
        <button>
          <Svg symbol="search" />
        </button>
      </div>
    </div>
  );
}

export default MobileSearch;
