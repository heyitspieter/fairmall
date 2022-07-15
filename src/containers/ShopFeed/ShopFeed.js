import Image from "next/image";
import { useEffect, useState } from "react";
import Svg from "src/components/Svg/Svg";
import { formatNumber } from "src/helpers";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";
import styles from "src/containers/ShopFeed/ShopFeed.module.scss";
import { useRouter } from "next/router";
// import product from "src/pages/[slug]";

function ShopFeed({products}) {
  const router = useRouter();

  const [modal, setModal] = useState({
    visibility: false,
  });

  const toggleModalHandler = () => {
    setModal((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));
  };

  const singleProduct = (id) => {
    router.push({
      pathname: `${id}`,
      query: { id: id },
    })
  }

  return (
    <>
      <ProductModal show={modal.visibility} close={toggleModalHandler} />
      <div className={styles.container}>
              <div className={styles.heading}>
                <p>Popular Items</p>
              </div>
              <div className={styles.grid}>
                {products.length > 0  &&
                  products.map((product, i) => {
                    const img = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/S/3516_1653297492.jpg'
                    return (
                      <div key={i} className={styles.grid__item}>
                        <figure>
                          <Image loader={() => img} objectFit="cover" alt={product.name} src={img} layout="fill" />
                          <div className={styles.grid__item_options}>
                            <button>
                              <span>Add to Basket</span>
                              <Svg symbol="shopping-basket" />
                            </button>
                            <button
                            //  onClick={toggleModalHandler}
                            onClick={()=>singleProduct(product.id)}

                             >
                              <span>Quick View</span>
                              <Svg symbol="eye" />
                            </button>
                            <button>
                              <span>Save</span>
                              <Svg symbol="heart-outline" />
                            </button>
                          </div>
                        </figure>
                        <h3>{product.name}</h3>
                        <p>{formatNumber(product.price)} NGN</p>
                      </div>
                    );
                  })}
              </div>
      </div>
    </>
  );
}

export default ShopFeed;
