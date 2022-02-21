import Image from "next/image";
import Svg from "/src/components/Svg/Svg";

import styles from "src/components/CategoryFeed/CategoryFeed.module.scss";

function CategoryFeed() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Furniture</p>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.toolbar__left}>
          <button>
            <span>Open filter</span>
            <Svg symbol="plus" />
          </button>
        </div>
        <div className={styles.toolbar__right}>
          <p>Showing 20 items</p>
          <div className={styles.sortBox}>
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
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/furniture_1.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_2.png"
              objectFit="cover"
              alt="Product 2"
              layout="fill"
            />
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_3.png"
              objectFit="cover"
              alt="Product 3"
              layout="fill"
            />
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_4.png"
              objectFit="cover"
              alt="Product 4"
              layout="fill"
            />
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
      </div>
      <div className={styles.pagination}>
        <button>First</button>
        <button className={styles.pagination__prev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.pagination__list}>
          <span role="button" className={styles.active}>1</span>
          <span role="button">2</span>
          <span role="button">3</span>
          <span role="button">4</span>
          <span>...</span>
          <span role="button">10</span>
        </div>
        <button className={styles.pagination__next}>
          <Svg symbol="chevron" />
        </button>
        <button>Last</button>
      </div>
    </div>
  );
}

export default CategoryFeed;
