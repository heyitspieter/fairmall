import Link from "next/link";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Breadcrumb/Breadcrumb.module.scss";

const Breadcrumb = ({ items }) => {
  const current = items[items.length - 1];

  return (
    <div className={styles.container}>
      <nav>
        <ol>
          {items.map((item, index) => {
            if (index !== items.length - 1) {
              return (
                <li key={index}>
                  <Link
                    href={`${item.route}`}
                    shallow={item.shallow ? true : false}
                  >
                    <a>{item.value}</a>
                  </Link>
                  <Svg className={styles.iconChevronRight} symbol="chevron" />
                </li>
              );
            }
          })}
          <li>
            <a className={styles.current} href="#">
              {current.value}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
