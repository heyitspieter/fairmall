import className from "classnames";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

import styles from "src/components/Home/Home.module.scss";

function SectionFiveLoadingSkeleton() {
  const router = useRouter();

  const inspirations = Array(5).fill("");

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
        {inspirations.map((inspiration, i) => {
          return (
            <figure key={i}>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default SectionFiveLoadingSkeleton;
