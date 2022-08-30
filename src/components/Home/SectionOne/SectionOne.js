import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import { useState, useEffect } from "react";
import { homeData } from "src/store/slices/home";
import { useDispatch, useSelector } from "react-redux";
import SectionOneLoadingSkeleton from "src/components/UI/LoadingSkeletons/SectionOneLoadingSkeleton";

import styles from "src/components/Home/Home.module.scss";

function SectionOne() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { home } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(homeData());
  }, [dispatch]);

  useEffect(() => {
    if (home && Object.keys(home).length > 0) {
      setIsLoading(false);
    }
  }, [home]);

  if (isLoading) {
    return <SectionOneLoadingSkeleton />;
  }

  return (
    <section className={styles.section_1}>
      <div className={styles.section_1__grid}>
        {home?.products?.map((product, index) => (
          <div className={styles.section_1__imgGroup} key={index}>
            <p>{product.name}</p>
            <figure>
              <Image
                quality="100"
                layout="fill"
                objectFit="cover"
                alt={product.name}
                src={product.image} // removed loader property & added path to domains list in next config file
              />
            </figure>
          </div>
        ))}
        <div className={styles.section_1__heading}>
          <p>Welcome to</p>
          <p>
            fair
            <span>mall</span>
          </p>
        </div>
      </div>
      <div className={styles.section_1__btnScroll}>
        <button>
          <Svg symbol="arrow-down" />
        </button>
      </div>
    </section>
  );
}

export default SectionOne;
