import Image from "next/image";
import className from "classnames";
import { useRouter } from "next/router";

import styles from "src/components/Home/Home.module.scss";

function SectionFive() {
  const router = useRouter();

  const containerClass = className({
    [styles.container]: router.pathname !== "/",
    [styles.bg__white]: router.pathname !== "/",
    [styles.section_5]: router.pathname === "/",
  });

  return (
    <section className={containerClass}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.section_5__grid}>
        <figure>
          <Image
            src="/images/inspo-1.png"
            objectFit="cover"
            alt="Slide 1"
            layout="fill"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-2.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-3.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-4.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
        <figure>
          <Image
            src="/images/inspo-5.png"
            objectFit="cover"
            layout="fill"
            alt="Slide 1"
          />
        </figure>
      </div>
      <div className={styles.section_5__btn}>
        <button>See More</button>
      </div>
    </section>
  );
}

export default SectionFive;
