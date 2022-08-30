import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInspirations } from "src/store/slices/inspirations";
import InspirationsLoadingSkeleton from "src/components/UI/LoadingSkeletons/InspirationsLoadingSkeleton";

import styles from "src/components/Inspirations/Inspirations.module.scss";

function Inspirations() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { inspirations } = useSelector((state) => state.inspiration);

  // fetch inspirations
  useEffect(() => {
    dispatch(getInspirations());
  }, [dispatch]);

  useEffect(() => {
    if (inspirations && inspirations?.length) {
      setIsLoading(false);
    }
  }, [inspirations]);

  if (isLoading) {
    return <InspirationsLoadingSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Inspirations</p>
      </div>
      <div className={styles.grid}>
        {inspirations?.map((item, index) => {
          const img = `/images/inspo-2.png`;
          return (
            <figure key={index}>
              {/* removed loader property & added path to domains list in next config file */}
              <Image
                layout="fill"
                alt="Slide 1"
                objectFit="cover"
                src={item.image}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
}

export default Inspirations;
