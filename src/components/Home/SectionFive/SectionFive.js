import Image from "next/image";
import className from "classnames";
import { useRouter } from "next/router";

import styles from "src/components/Home/Home.module.scss";

function SectionFive({inspirations}) {
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
        {inspirations &&
          inspirations.slice(0, 5).map((inspiration, idx) => {
            const img = `/images/inspo-2.png`;
            return (
              <figure key={idx}>
                <Image loader={() => img} objectFit="cover" alt={inspiration.title} src={inspiration.image} layout="fill" />
              </figure>
            );
          })}
        {/* <figure>
          <Image src="/images/inspo-2.png" objectFit="cover" layout="fill" alt="Slide 1" />
        </figure>
        <figure>
          <Image src="/images/inspo-3.png" objectFit="cover" layout="fill" alt="Slide 1" />
        </figure>
        <figure>
          <Image src="/images/inspo-4.png" objectFit="cover" layout="fill" alt="Slide 1" />
        </figure>
        <figure>
          <Image src="/images/inspo-5.png" objectFit="cover" layout="fill" alt="Slide 1" />
        </figure> */}
      </div>
      <div className={styles.section_5__btn}>
        <button onClick={() => router.push("/inspirations")}>See More</button>
      </div>
    </section>
  );
}

export default SectionFive;
