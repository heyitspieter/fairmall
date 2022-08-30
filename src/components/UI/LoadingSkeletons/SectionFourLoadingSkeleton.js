import Skeleton from "react-loading-skeleton";
import { imagePlaceholderData } from "src/helpers";
import HomeCarousel from "src/containers/Home/HomeCarousel/HomeCarousel";

import styles from "src/components/Home/Home.module.scss";

function SectionFourLoadingSkeleton() {
  const carouselItems = Array(8).fill("");

  return (
    <section className={styles.section_4}>
      <div className={styles.heading}>
        <p>
          <Skeleton width={150} />
        </p>
      </div>
      <HomeCarousel items={carouselItems} config={{ outerSpacing: 25 }} />
    </section>
  );
}

export default SectionFourLoadingSkeleton;
