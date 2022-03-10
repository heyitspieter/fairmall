import Image from "next/image";

import styles from "src/components/Home/Home.module.scss";

function SectionTwo() {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2__left}>
        <Image src="/svgs/spiral.svg" layout="fill" alt="Spiral" />
      </div>
      <div className={styles.section_2__info}>
        <h2>
          fair<span>mall</span>
        </h2>
        <p>
          Fairmall is your one stop e-commerce platform dedicated to providing a
          wide variety of locally made products ranging from household items,
          furniture, food, arts, crafts, fashion and agricultural products to
          urbanized working-age customers in Nigeria and diasporan markets who
          are interested in sustainable, eco-friendly consumerism and
          environmentally concious.
        </p>
        <span>
          <em>“It makes sense ethically, it should make sense financially”</em>
        </span>
      </div>
      <div className={styles.section_2__right}>
        <Image src="/svgs/spiral.svg" layout="fill" alt="Spiral" />
      </div>
    </section>
  );
}

export default SectionTwo;
