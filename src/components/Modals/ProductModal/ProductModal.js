import { useRef } from "react";
import Image from "next/image";
import className from "classnames";
import Svg from "src/components/Svg/Svg";
import { CSSTransition } from "react-transition-group";

import styles from "src/components/Modals/ProductModal/ProductModal.module.scss";

const animationTiming = {
  exit: 400,
  enter: 400,
};

function ProductModal({ show, close }) {
  const ref = useRef();

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

  return (
    <CSSTransition {...modalConfig}>
      <div className={modalOverlayClass}>
        <div onClick={close} className={styles.backdrop}></div>
        <div ref={ref} className={styles.dialog}>
          <div className={styles.content}>
            <div className={styles.content__body}>
              <div className={styles.container}>
                <div className={styles.slider}>
                  <button className={styles.sliderBtn}>
                    <Svg symbol="arrow" />
                  </button>
                  <div className={styles.slider__flex}>
                    <div className={styles.slider__item}>
                      <figure>
                        <Image
                          src="/images/inspo-7.png"
                          layout="fill"
                          alt="1"
                        />
                      </figure>
                    </div>
                    <div className={styles.slider__item}>
                      <figure>
                        <Image
                          src="/images/inspo-8.png"
                          layout="fill"
                          alt="2"
                        />
                      </figure>
                    </div>
                    <div className={styles.slider__item}>
                      <figure>
                        <Image
                          src="/images/inspo-9.png"
                          layout="fill"
                          alt="3"
                        />
                      </figure>
                    </div>
                  </div>
                  <button className={styles.sliderBtn}>
                    <Svg symbol="arrow" />
                  </button>
                </div>
                <div className={styles.description}>
                  <div className={styles.description__row}>
                    <div className={styles.left}>
                      <h4>Arts and Crafts</h4>
                      <h3>Product name here</h3>
                      <p>100,000 NGN</p>
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum fermentum, mauris viverra lobortis lorem vel. At
                      amet in nulla ullamcorper diam amet, turpis orci dui.
                      Ornare eget sollicitudin non semper facilisis dolor nisi,
                      quam lacus. Velit pharetra, vitae sollicitudin nullam.
                      Feugiat velit senectus in faucibus tempus malesuada....
                    </p>
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
  );
}

export default ProductModal;
