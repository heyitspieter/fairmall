import { useRef } from "react";
import Image from "next/image";
import className from "classnames";
import Svg from "src/components/Svg/Svg";
import Carousel from "react-elastic-carousel";
import { CSSTransition } from "react-transition-group";

import styles from "src/components/Modals/ProductModal/ProductModal.module.scss";

const animationTiming = {
  exit: 400,
  enter: 400,
};

function ProductModal({ show, close, product }) {
  const ref = useRef();

  const carouselRef = useRef();

  const modalOverlayClass = className({
    [styles.overlay]: true,
    [styles.overlay__hidden]: !show,
  });

  const modalConfig = {
    nodeRef: ref,
    mountOnEnter: true,
    unmountOnExit: true,
    in: show,
    timeout: animationTiming,
    classNames: {
      enter: "",
      enterActive: styles.open,
      exit: "",
      exitActive: styles.close,
    },
  };

  const breakpoints = [
    { width: 1, itemsToShow: 1, outerSpacing: 0, itemPadding: [0, 0, 0, 0] },
    { width: 200, itemsToShow: 1, outerSpacing: 0, itemPadding: [0, 0, 0, 0] },
    { width: 550, itemsToShow: 2 },
  ];

  const items = [
    {
      title: "Slide 1",
      img: "/images/inspo-7.png",
    },
    {
      title: "Slide 2",
      img: "/images/inspo-8.png",
    },
    {
      title: "Slide 3",
      img: "/images/inspo-9.png",
    },
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
      <CSSTransition {...modalConfig}>
        <div className={modalOverlayClass}>
          <div onClick={close} className={styles.backdrop}></div>
          <div ref={ref} className={styles.dialog}>
            <div className={styles.content}>
              <div className={styles.content__body}>
                <div className={styles.container}>
                  <div className={styles.slider}>
                    <button onClick={gotoPrev} className={styles.sliderBtn}>
                      <Svg symbol="arrow" />
                    </button>
                    <Carousel showEmptySlots itemsToShow={2} itemsToScroll={1} outerSpacing={20} ref={carouselRef} breakPoints={breakpoints} itemPadding={[0, 15, 0, 0]} className={styles.slider__flex}>
                      {product.images &&
                        product.images.map((image, i) => {
                          const img = `https://fairmall.azurewebsites.net${image.src}`;
                          return (
                            <div key={i} className={styles.slider__item}>
                              <figure>
                                <Image loader={() => img} layout="fill" src={image} alt={product.name} />
                              </figure>
                            </div>
                          );
                        })}
                    </Carousel>
                    <button onClick={gotoNext} className={styles.sliderBtn}>
                      <Svg symbol="arrow" />
                    </button>
                  </div>
                  <div className={styles.description}>
                    <div className={styles.description__row}>
                      <div className={styles.left}>
                        <p />
                        <h4
                          dangerouslySetInnerHTML={{
                            __html: product.categories ? product.categories[0].name : null,
                          }}
                        />
                        <h3>{product ? product.name : null}</h3>
                        <p>{product ? product.price : null} NGN</p>
                      </div>
                      <div className={styles.right}>
                        <div className={styles.rating}>
                          <button>
                            <Svg symbol="star" />
                          </button>
                          <button>
                            <Svg symbol="star" />
                          </button>
                          <button>
                            <Svg symbol="star" />
                          </button>
                          <button>
                            <Svg symbol="star" />
                          </button>
                          <button>
                            <Svg symbol="star" />
                          </button>
                        </div>
                        <a href="#">(20)</a>
                        <button>
                          <Svg symbol="heart-outline" />
                        </button>
                      </div>
                    </div>
                    <div className={styles.description__row}>
                      <h3>Description:</h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: product ? product.short_description : null,
                        }}
                      />
                    </div>
                    <div className={styles.description__row}>
                      <button>View More</button>
                      <button>
                        <Svg symbol="shopping-basket" />
                        <span>Add to Basket</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <style jsx global>
        {`
          .rec-pagination {
            display: none !important;
          }

          .rec-arrow {
            display: none;
          }

          .rec-carousel-item {
            overflow: hidden;
            border-radius: 0.7rem;
          }

          @media screen and (max-width: 37.5em) {
            .rec-carousel-item {
              display: flex;
              flex: 0 0 100%;
            }

            .rec-slider {
              width: 100%;
            }

            .rec-swipable {
              width: 100%;
              display: flex;
            }

            .rec-carousel-item {
              display: flex;
            }

            .rec-item-wrapper {
              width: 100% !important;
            }
          }
        `}
      </style>
    </>
  );
}

export default ProductModal;
