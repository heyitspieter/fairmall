import { useEffect, useState } from "react";
import { homeData } from "src/store/slices/home";
import { useSelector, useDispatch } from "react-redux";
import HomeCarousel from "src/containers/Home/HomeCarousel/HomeCarousel";
import SectionFourLoadingSkeleton from "src/components/UI/LoadingSkeletons/SectionFourLoadingSkeleton";

import styles from "src/components/Home/Home.module.scss";

function SectionFour() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [carouselItems, setCarouselItems] = useState([]);

  const { home } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(homeData());
  }, [dispatch]);

  useEffect(() => {
    if (home && home?.categories?.length) {
      setIsLoading(false);
      setCategory(home?.categories[1]);
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
    return <SectionFourLoadingSkeleton />;
  }

  return (
    <section className={styles.section_4}>
      <div className={styles.heading}>
        <p>{category?.category?.description}</p>
      </div>
      <HomeCarousel items={carouselItems} config={{ outerSpacing: 25 }} />

      {/* <div className={styles.section_4__carousel}>
        <button className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__grid}>
          {
            category?.products.map((product) => (
              product.additional_images.map((addImage, index) => (
                <>
                  <figure key={index}>
                    <Image loader={() => addImage} src={addImage} layout="fill" alt="Slide 1" />
                  </figure>
                </>
              ))
            ))
          }
        </div>
        <button className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div> */}
    </section>
  );
}

export default SectionFour;
