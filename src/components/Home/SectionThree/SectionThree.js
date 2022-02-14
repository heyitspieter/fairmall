import Image from "next/image";
import className from "classnames";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Home/Home.module.scss";

function SectionThree() {
  return (
    <section className={styles.section_3}>
      <div className={styles.heading}>
        <p>World Class Furniture</p>
      </div>
      <div className={styles.section_3__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          <figure>
            <Image src="/images/slide-1.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-2.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-3.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-4.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-5.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-6.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-7.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-8.png" layout="fill" alt="Slide 1" />
          </figure>
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
      <div className={styles.section_3__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div
          className={className({
            [styles.gutter]: true,
            [styles.carousel__grid]: true,
          })}
        >
          <figure>
            <Image src="/images/slide-1.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-2.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-3.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-4.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-5.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-6.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-7.png" layout="fill" alt="Slide 1" />
          </figure>
          <figure>
            <Image src="/images/slide-8.png" layout="fill" alt="Slide 1" />
          </figure>
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
    </section>
  );
}

export default SectionThree;
