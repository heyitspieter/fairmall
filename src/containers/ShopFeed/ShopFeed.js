import Image from "next/image";
import { useState } from "react";
import Svg from "src/components/Svg/Svg";
import { formatNumber } from "src/helpers";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";

import styles from "src/containers/ShopFeed/ShopFeed.module.scss";

function ShopFeed() {
  const [modal, setModal] = useState({
    visibility: false,
  });

  const toggleModalHandler = () => {
    setModal((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));
  };

  const items = [
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_5.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_6.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_7.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_8.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_1.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_2.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_3.png",
    },
    {
      price: 100000,
      name: "Keto Hand-made Vase",
      img: "/images/product_4.png",
    },
  ];

  return (
    <>
      <ProductModal show={modal.visibility} close={toggleModalHandler} />
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Popular Items</p>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => {
            return (
              <div key={i} className={styles.grid__item}>
                <figure>
                  <Image
                    objectFit="cover"
                    alt={item.name}
                    src={item.img}
                    layout="fill"
                  />
                  <div className={styles.grid__item_options}>
                    <button>
                      <span>Add to Basket</span>
                      <Svg symbol="shopping-basket" />
                    </button>
                    <button onClick={toggleModalHandler}>
                      <span>Quick View</span>
                      <Svg symbol="eye" />
                    </button>
                    <button>
                      <span>Save</span>
                      <Svg symbol="heart-outline" />
                    </button>
                  </div>
                </figure>
                <h3>{item.name}</h3>
                <p>{formatNumber(item.price)} NGN</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShopFeed;
