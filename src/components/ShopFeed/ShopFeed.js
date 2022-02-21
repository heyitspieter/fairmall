import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/ShopFeed/ShopFeed.module.scss";

function Recommendations() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Popular Items</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_5.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_6.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_7.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_8.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_1.png"
              objectFit="cover"
              alt="Slide 1"
              layout="fill"
            />
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
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
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
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
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
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
            <div className={styles.grid__item_options}>
              <button>
                <Svg symbol="shopping-basket" />
              </button>
              <button>
                <Svg symbol="eye" />
              </button>
              <button>
                <Svg symbol="heart-outline" />
              </button>
            </div>
          </figure>
          <h3>Keto Hand-made Vase</h3>
          <p>100,000 NGN</p>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
