import Image from "next/image";
import className from "classnames";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInspirations } from "src/store/slices/inspirations";
import SectionFiveLoadingSkeleton from "src/components/UI/LoadingSkeletons/SectionFiveLoadingSkeleton";

import styles from "src/components/Home/Home.module.scss";

function SectionFive() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { inspirations } = useSelector((state) => state.inspiration);

  useEffect(() => {
    dispatch(getInspirations());
  }, [dispatch]);

  useEffect(() => {
    if (inspirations && inspirations?.length) {
      setIsLoading(false);
    }
  }, [inspirations]);

  const containerClass = className({
    [styles.container]: router.pathname !== "/",
    [styles.bg__white]: router.pathname !== "/",
    [styles.section_5]: router.pathname === "/",
  });

  if (isLoading) {
    return <SectionFiveLoadingSkeleton />;
  }

  return (
    <section className={containerClass}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.section_5__grid}>
        {inspirations.slice(0, 5).map((inspiration, i) => {
          const img = `/images/inspo-2.png`;

          return (
            <figure key={i}>
              <Image
                layout="fill"
                objectFit="cover"
                alt={inspiration.title}
                src={inspiration.image}
              />
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
