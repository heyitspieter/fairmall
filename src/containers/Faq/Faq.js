import { useState } from "react";
import className from "classnames";
import Svg from "src/components/Svg/Svg";

import styles from "src/containers/Faq/Faq.module.scss";

function Faq() {
  const [accordion, setAccordion] = useState({
    key: -1,
    open: false,
  });

  const isOpen = (key) => key === accordion.key && accordion.open;

  const toggleAccordion = (key) => {
    setAccordion((prevState) => ({
      key: prevState.key === key ? -1 : key,
      open: prevState.key === key ? false : true,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Faq</p>
      </div>
      <div className={styles.accordion}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <button onClick={() => toggleAccordion(0)}>
              <span className={className({ [styles.active]: isOpen(0) })}>
                What type of products are sold on Fairmall?
              </span>
              <Svg symbol={isOpen(0) ? "minus" : "plus"} />
            </button>
            <div aria-expanded={isOpen(0)} className={styles.list__content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                semper aliquam adipiscing habitasse egestas augue at viverra.
                Tristique tellus porttitor mauris nisl accumsan. Sed tortor
                placerat commodo tellus aenean mi. Nec arcu eget ullamcorper.
              </p>
            </div>
          </li>
          <li className={styles.list__item}>
            <button onClick={() => toggleAccordion(1)}>
              <span className={className({ [styles.active]: isOpen(1) })}>
                How do I process my order?
              </span>
              <Svg symbol={isOpen(1) ? "minus" : "plus"} />
            </button>
            <div aria-expanded={isOpen(1)} className={styles.list__content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia arcu mi, vel ullamcorper eros bibendum ac. Cras et
                sollicitudin sapien, eu bibendum enim. Cras a turpis viverra,
                faucibus felis sit amet, dapibus nulla. Vestibulum quis massa
                quis massa euismod hendrerit. Praesent velit diam, lacinia sed
                imperdiet nec, elementum in neque.
              </p>
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </li>
          <li className={styles.list__item}>
            <button onClick={() => toggleAccordion(2)}>
              <span className={className({ [styles.active]: isOpen(2) })}>
                Can I review my previous orders?
              </span>
              <Svg symbol={isOpen(2) ? "minus" : "plus"} />
            </button>
            <div aria-expanded={isOpen(2)} className={styles.list__content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia arcu mi, vel ullamcorper eros bibendum ac. Cras et
                sollicitudin sapien, eu bibendum enim. Cras a turpis viverra,
                faucibus felis sit amet, dapibus nulla. Vestibulum quis massa
                quis massa euismod hendrerit. Praesent velit diam, lacinia sed
                imperdiet nec, elementum in neque.
              </p>
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </li>
          <li className={styles.list__item}>
            <button onClick={() => toggleAccordion(3)}>
              <span className={className({ [styles.active]: isOpen(3) })}>
                I would like to recommend some items. How would I do that?
              </span>
              <Svg symbol={isOpen(3) ? "minus" : "plus"} />
            </button>
            <div aria-expanded={isOpen(3)} className={styles.list__content}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia arcu mi, vel ullamcorper eros bibendum ac. Cras et
                sollicitudin sapien, eu bibendum enim. Cras a turpis viverra,
                faucibus felis sit amet, dapibus nulla. Vestibulum quis massa
                quis massa euismod hendrerit. Praesent velit diam, lacinia sed
                imperdiet nec, elementum in neque.
              </p>
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Faq;
