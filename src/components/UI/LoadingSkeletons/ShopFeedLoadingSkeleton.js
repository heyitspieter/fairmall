import Skeleton from "react-loading-skeleton";

import styles from "src/containers/ShopFeed/ShopFeed.module.scss";

function ShopFeedLoadingSkeleton() {
  const products = Array(4).fill("");

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Popular Items</p>
      </div>
      <div className={styles.grid}>
        {products.map((product, i) => {
          return (
            <div key={i} className={styles.grid__item}>
              <Skeleton style={{ width: "200%", height: "100%" }} />
              <h3>
                <Skeleton width={150} />
              </h3>
              <p>
                <Skeleton width={100} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopFeedLoadingSkeleton;
