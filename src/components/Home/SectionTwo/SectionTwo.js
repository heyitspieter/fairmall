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
         Fair Mall is a source aggregator which connects producers of indigenous Nigerian
          commodities with premium markets and opportunities, enabled by trade. Our goal is
          to help individuals and businesses easily discover quality locally-produced goods
          while providing indigenous producers with access to a wider customer network and
          business support, all at a fair rate for producers and consumers. We ensure that
          producers receive premium value for their wares thereby improving their livelihoods
          and stimulating economic growth in their communities.
        </p>
        {/* <span>
          <em>“It makes sense ethically, it should make sense financially”</em>
        </span> */}
      </div>
      <div className={styles.section_2__right}>
        <Image src="/svgs/spiral.svg" layout="fill" alt="Spiral" />
      </div>
    </section>
  );
}

export default SectionTwo;
