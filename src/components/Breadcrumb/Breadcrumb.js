import Link from "next/link";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Breadcrumb/Breadcrumb.module.scss";

const Breadcrumb = ({ item }) => {
  console.log("====================================");
  console.log(item);
  console.log("====================================");
  return (
    <div className={styles.container}>
      <nav>
        <ol>
          <li>
            <Link href={`${item.route}`} shallow={item.shallow ? true : false}>
              <a>Shop</a>
            </Link>
            <Svg className={styles.iconChevronRight} symbol="chevron" />
          </li>
          <li>
            <a className={styles.current} href="#">
              <p
                dangerouslySetInnerHTML={{
                  __html: item ? item.value : "loading",
                }}
              />
              {/* {current.value} */}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
