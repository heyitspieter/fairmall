import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Home/Home.module.scss";

function SectionFour({category}) {
  return (
    <section className={styles.section_4}>
      <div className={styles.heading}>
        <p>{category?.category?.description}</p>
      </div>
      <div className={styles.section_4__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          {
            category?.products.map((product) => (
              product.additional_images.map((addImage, index) => (
                <>
                  <figure key={index}>
                    <Image loader={() => addImage} src={addImage} layout="fill" alt="Slide 1" />
                  </figure>
                </>
              ))
            ))
          }
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
      {/* <div className={styles.section_4__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          {
            category?.products.map((product) => (
              product.additional_images.map((addImage, index) => (
                <>
                  <figure key={index}>
                    <Image loader={() => addImage} src={addImage} layout="fill" alt="Slide 1" />
                  </figure>
                </>
              ))
            ))
          }
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div> */}
    </section>
  );
}

export default SectionFour;
