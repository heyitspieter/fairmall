import Link from "next/link";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Breadcrumb/Breadcrumb.module.scss";

const Breadcrumb = ({ data }) => {

  return (
    <div className={styles.container}>
      <nav>
        <ol>
          <li >
            <Link href={''}>
              <a>{data.category.name}</a>
            </Link>
            <Svg className={styles.iconChevronRight} symbol="chevron" />
          </li>
          <li >
            <Link href={''}>
              <a>{data.subcategory.name}</a>
            </Link>
            <Svg className={styles.iconChevronRight} symbol="chevron" />
          </li>
          <li>
            <a className={styles.current} href="#">
              {data.name}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
