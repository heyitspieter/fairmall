import { useState } from "react";
import className from "classnames";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import SearchDropdown from "src/components/SearchDropdown/SearchDropdown";

import styles from "src/containers/MobileSearch/MobileSearch.module.scss";

function MobileSearch() {
  const router = useRouter();

  const [searchResults, setSearchResults] = useState([]);

  const [inputFocused, setInputFocused] = useState(false);

  const onBlur = () => {
    setInputFocused(false);
  };

  const onFocus = () => {
    setInputFocused(true);
  };

  const containerClass = className({
    [styles.container]: true,
    [styles.bg__pink]: router.pathname === "/",
  });

  const searchMode = inputFocused && searchResults.length;

  return (
    <div className={containerClass}>
      <div className={styles.wrapper}>
        <input
          value=""
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={() => {}}
          placeholder="Search furniture, household items, art...."
        />
        <button>
          <Svg symbol="search" />
        </button>
        {searchMode ? <SearchDropdown /> : null}
      </div>
    </div>
  );
}

export default MobileSearch;
