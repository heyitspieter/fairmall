import Head from "next/head";
import Svg from "src/components/Svg/Svg";
import Skeleton from "react-loading-skeleton";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";

import shopStyles from "src/containers/ShopFeed/ShopFeed.module.scss";
import styles from "src/containers/CategoryFeed/CategoryFeed.module.scss";

function CategoryFeedLoadingSkeleton() {
  const products = Array(5).fill("");

  const breadcrumb = {
    id: 0,
    route: "/shop",
    value: "Category",
  };

  return (
    <>
      <Head>
        <title>Loading</title>
      </Head>
      <Breadcrumb item={breadcrumb} />
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>
            <Skeleton width={110} />
          </p>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.toolbar__left}>
            <button>
              <span>Open filter</span>
              <Svg symbol="plus" />
            </button>
          </div>
          <div className={styles.toolbar__right}>
            <p>Showing 0 items</p>
            <div className={styles.sortBox}>
              <div className={styles.sortOverlay}></div>
              <button>
                <span>Sort by</span>
                <div>
                  <Svg symbol="caret" />
                </div>
                <div>
                  <a href="#">Price: Highest to Lowest</a>
                  <a href="#">Price: Lowest to Highest</a>
                  <a href="#">Popularity</a>
                  <a href="#">New Arrivals</a>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {products.map((product, i) => {
            return (
              <div key={i} className={shopStyles.grid__item}>
                {/* removed loader property & added path to domains list in next config file */}
                <Skeleton style={{ width: "200%", height: "100%" }} />
                <h3>
                  <Skeleton width={130} />
                </h3>
                <p>
                  <Skeleton width={95} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryFeedLoadingSkeleton;
