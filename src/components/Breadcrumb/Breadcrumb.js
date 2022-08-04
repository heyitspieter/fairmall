import Link from "next/link";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Breadcrumb/Breadcrumb.module.scss";

const Breadcrumb = ({ item }) => {
  return (
    <div className={styles.container}>
      <nav>
        <ol>
          <li>
            <Link href={item.route}>
              <a>Shop</a>
            </Link>
            <Svg className={styles.iconChevronRight} symbol="chevron" />
          </li>
          {/*<li>*/}
          {/*  <Link href={""}>*/}
          {/*    <a>{item?.subcategory?.name}</a>*/}
          {/*  </Link>*/}
          {/*  <Svg className={styles.iconChevronRight} symbol="chevron" />*/}
          {/*</li>*/}
          <li>
            <a className={styles.current} href="#">
              {item?.value}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
