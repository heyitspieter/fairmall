import Image from "next/image";
import className from "classnames";
import { useRouter } from "next/router";

import styles from "src/components/Home/Home.module.scss";

function SectionFive({ inspirations }) {
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
          inspirations.map((inspiration, idx) => {
            const img = `https://fairmall.azurewebsites.net${inspiration.images[0].src}`;
            return (
              <figure key={idx}>
                <Image loader={() => img} objectFit="cover" alt={inspiration.name} src={img} layout="fill" />
              </figure>
            );
          })}
      </div>
      <div className={styles.section_5__btn}>
        <button onClick={() => router.push("/inspirations")}>See More</button>
      </div>
    </section>
  );
}

export default SectionFive;
