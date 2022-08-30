import Image from "next/image";
import { useRef } from "react";
import Svg from "src/components/Svg/Svg";
import Carousel from "react-elastic-carousel";
import Skeleton from "react-loading-skeleton";
import { useIsMobile } from "src/hooks/media-query";

import styles from "src/components/Home/Home.module.scss";

function HomeCarousel({ items, config }) {
  const carouselRef = useRef();

  const isMobile = useIsMobile(600);

  const breakpoints = [
    { width: 1, itemsToShow: 2, itemPadding: [0, 10, 0, 0] },
    { width: 550, itemsToShow: 3 },
    { width: 640, itemsToShow: 3 },
    { width: 700, itemsToShow: 4 },
    { width: 850, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1150, itemsToShow: 5 },
    { width: 1450, itemsToShow: 7 },
  ];

  const gotoPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const gotoNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <>
      <div className={styles.section_3__carousel}>
        <button onClick={gotoPrev} className={styles.carousel__btnPrev}>
          <Svg symbol="chevron" />
        </button>
        <div className={styles.carousel__wrapper}>
          <Carousel
            showEmptySlots
            itemsToShow={7}
            itemsToScroll={2}
            ref={carouselRef}
            breakPoints={breakpoints}
            itemPadding={[0, 25, 0, 0]}
            swipable={isMobile ? true : false}
            className={styles.carousel__inner}
          >
            {items.map((item, i) => {
              if (typeof item === "string" && item.length <= 0) {
                return (
                  <figure key={i}>
                    <Skeleton style={{ width: "100%", height: "100%" }} />
                  </figure>
                );
              }

              return (
                <figure key={i}>
                  {/* removed loader property & added path to domains list in next config file */}
                  <Image src={item} layout="fill" alt="" />
                </figure>
              );
            })}
          </Carousel>
        </div>
        <button onClick={gotoNext} className={styles.carousel__btnNext}>
          <Svg symbol="chevron" />
        </button>
      </div>
      <style jsx global>
        {`
          .rec-pagination {
            display: none !important;
          }

          .rec-arrow {
            display: none;
          }

          .rec-carousel-item {
            flex: 0 0 18.2rem;
          }
        `}
      </style>
    </>
  );
}

export default HomeCarousel;
