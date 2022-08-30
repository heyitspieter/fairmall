import Skeleton from "react-loading-skeleton";

import styles from "src/components/Categories/Categories.module.scss";

function CategoriesLoadingSkeleton() {
  const categories = Array(5).fill("");

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Categories</p>
      </div>
      <div className={styles.grid}>
        {categories.map((category, i) => (
          <figure key={i}>
            <div>
              <p>
                <Skeleton />
              </p>
            </div>
            <Skeleton style={{ width: "100%", height: "100%" }} />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default CategoriesLoadingSkeleton;
