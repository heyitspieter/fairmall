import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Home/Home.module.scss";

function SectionFour() {
  return (
    <section className={styles.section_4}>
      <div className={styles.heading}>
        <p>Art and Crafts from all Over</p>
      </div>
      <div className={styles.section_4__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          <figure>
            <Image src="/images/landscape-3.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/landscape-1.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/landscape-2.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/landscape-5.png" layout="fill" alt="Slide 1" />
          </figure>
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
      <div className={styles.section_4__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          <figure>
            <Image src="/images/landscape-4.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/landscape-3.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/landscape-1.png" layout="fill" alt="Slide 1" />
          </figure>
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
    </section>
  );
}

export default SectionFour;
