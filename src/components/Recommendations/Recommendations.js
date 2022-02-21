import Image from "next/image";

import styles from "src/components/Recommendations/Recommendations.module.scss";

function Recommendations({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>{title}</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__item}>
          <figure>
            <Image
              src="/images/product_1.png"
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
    </div>
  );
}

export default Recommendations;
