import Image from "next/image";
import className from "classnames";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import Svg from "src/components/Svg/Svg";
import { CSSTransition } from "react-transition-group";

import styles from "src/components/Modals/ReviewModal/ReviewModal.module.scss";

const animationTiming = {
  exit: 400,
  enter: 400,
};

const ReactPortal = dynamic(
  () => import("src/components/ReactPortal/ReactPortal"),
  { ssr: false }
);

function ReviewModal({ show, close }) {
  const ref = useRef();

  const [touched, setTouched] = useState(false);

  const [starRating, setStarRating] = useState(
    Array(5).fill({
      active: false,
    })
  );

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

  const onToggleStar = (e, key) => {
    let array = Array(5).fill({
      active: false,
    });

    let highlightedReview = array.length - key;

    array[key] = { active: true };

    setStarRating(array);

    setTouched(true);

    console.log(`${highlightedReview} star rating`);
  };

  const onClose = () => {
    // Reset rating
    let array = Array(5).fill({
      active: false,
    });

    close();
    setTouched(false);
    setStarRating(array);
  };

  return (
    <ReactPortal containerElement="body">
      <>
        <CSSTransition {...modalConfig}>
          <div className={modalOverlayClass}>
            <div onClick={onClose} className={styles.backdrop}></div>
            <div ref={ref} className={styles.dialog}>
              <div className={styles.content}>
                <div className={styles.content__body}>
                  <div className={styles.container}>
                    <div className={styles.title}>
                      <h2>Submit a Review </h2>
                    </div>
                    <div className={styles.rating__group}>
                      <p>How would you like to rate your experience</p>
                      <div className={styles.rating__grid}>
                        {starRating.map((star, i) => (
                          <button
                            className={star.active ? styles.active : ""}
                            onClick={(e) => onToggleStar(e, i)}
                            key={i}
                          >
                            <Svg symbol="star" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.action}>
                      <button disabled={!touched}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </>
    </ReactPortal>
  );
}

export default ReviewModal;
