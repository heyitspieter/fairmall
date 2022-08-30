import Skeleton from "react-loading-skeleton";

import styles from "src/components/Inspirations/Inspirations.module.scss";

function InspirationsLoadingSkeleton() {
  const inspirations = Array(13).fill("");

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.grid}>
        {inspirations.map((inspirations, i) => {
          return (
            <figure key={i}>
              <Skeleton style={{ width: "100%", height: "100%" }} />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default InspirationsLoadingSkeleton;
