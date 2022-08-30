import { useEffect, useState } from "react";
import { homeData } from "src/store/slices/home";
import { useSelector, useDispatch } from "react-redux";
import HomeCarousel from "src/containers/Home/HomeCarousel/HomeCarousel";
import SectionThreeLoadingSkeleton from "src/components/UI/LoadingSkeletons/SectionThreeLoadingSkeleton";

import styles from "src/components/Home/Home.module.scss";

function SectionThree() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { home } = useSelector((state) => state.home);

  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    dispatch(homeData());
  }, [dispatch]);

  useEffect(() => {
    if (home && home?.categories?.length) {
      setIsLoading(false);
      setCategory(home?.categories[0]);
    }
  }, [home]);

  useEffect(() => {
    if (category && category?.products) {
      if (category?.products?.length && category?.products?.length > 0) {
        let items = [];

        for (let i = 0; i < category.products.length; i++) {
          items = [...items, ...category.products[i].additional_images];
        }

        setCarouselItems(items);
      }
    }
  }, [category]);

  if (isLoading) {
    return <SectionThreeLoadingSkeleton />;
  }

  return (
    <section className={styles.section_3}>
      <div className={styles.heading}>
        <p>{category?.category?.description}</p>
      </div>
      <HomeCarousel items={carouselItems} config={{ outerSpacing: 25 }} />
      {/* <HomeCarousel items={addItems.reverse()} config={{ outerSpacing: 25 }} /> */}
      <style jsx global>
        {`
          .rec-carousel-item {
            flex: 0 0 18.2rem;
          }

          .${styles.gutter} .rec-swipable > *:not(:last-child) {
            margin-right: 0;
            margin-left: 2.7rem;
          }

          .${styles.gutter} .rec-swipable > *:last-child {
            margin: 0 2.7rem;
          }

          .${styles.gutter} .rec-swipable > * {
            scroll-snap-align: end;
            transform-origin: center center;
          }
        `}
      </style>
    </section>
  );
}

export default SectionThree;
