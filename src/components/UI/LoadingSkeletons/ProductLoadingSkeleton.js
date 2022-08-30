import Svg from "src/components/Svg/Svg";
import Skeleton from "react-loading-skeleton";

import styles from "src/components/ProductDescription/ProductDescription.module.scss";

function ProductLoadingSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.boxGrid}>
        <div className={styles.gallery}>
          <div className={styles.gallery__left}>
            {/* removed loader property & added path to domains list in next config file */}
            <Skeleton style={{ height: "100%" }} />
          </div>
          <div className={styles.gallery__right}>
            <figure>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
            <figure>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
            <figure>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
            <figure>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__1}>
            <h4>
              <Skeleton width={180} />
            </h4>
            <h3>
              <Skeleton width={100} />
            </h3>
            <p>
              by <span>FAIRMALL</span>
            </p>
          </div>
          <div className={styles.info__2}>
            <div className={styles.rating}>
              <Skeleton width={100} height={20} />
            </div>
            <div className={styles.rating_count}>
              {/*<button>({product?.average_rating})</button>*/}
            </div>
            <div className={styles.rating_btn}>
              <button>Submit a review</button>
            </div>
          </div>

          <div className={styles.btnAdd}></div>
        </div>
        <div className={styles.actions}>
          <button>
            <Svg symbol="heart-outline" />
          </button>
          <button>
            <Svg symbol="share" />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__row}>
          <h3>Description</h3>
          <div className={styles.content__html}>
            <p>
              <Skeleton />
            </p>
          </div>
        </div>
        <div className={styles.content__row}>
          <h3>In Stock:</h3>
          <p>
            <Skeleton width={100} />
          </p>
        </div>
        <div className={styles.content__row}>
          <h3>Category:</h3>
          <p>
            <Skeleton width={250} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductLoadingSkeleton;
