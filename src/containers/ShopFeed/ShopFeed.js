import Image from "next/image";
import { useState } from "react";
import Svg from "src/components/Svg/Svg";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";
import styles from "src/containers/ShopFeed/ShopFeed.module.scss";
import { useRouter } from "next/router";
import formatToCurrency from "src/helpers/formatAmount";
// import product from "src/pages/[slug]";

function ShopFeed({ products }) {
  const router = useRouter();

  const [modal, setModal] = useState({
    visibility: false,
  });
  const [selectedProduct, setSelectedProduct] = useState({});

  // console.log('===products===', products);

  const handleAddToCard = async (product) => {
    const lineItem = {
      product_id: product.id,
      variation_id: product.vatiation ? product.variation.id : null,
      name: product.name,
      price: parseFloat(product.price),
      image: product.images[0].src,
      quantity: 1,
      total: product.price * 1,
    };
    dispatch(addLineItem(lineItem));
  };

  const toggleModalHandler = (product) => {
    setViewProduct(product);
    setModal((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility,
    }));
  };

  const singleProduct = (id) => {
    router.push({
      pathname: `${id}`,
      query: { id: id },
    });
  };

  return (
    <>
      {modal && <ProductModal product={selectedProduct} show={modal.visibility} close={toggleModalHandler} />}
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Popular Items</p>
        </div>
        <div className={styles.grid}>
          {products.length > 0 &&
            products.map((product, i) => {
              const img = "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/S/3516_1653297492.jpg";
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
                        onClick={() => {
                          setSelectedProduct(product);
                          toggleModalHandler();
                          // singleProduct(product.id)
                        }}
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
                  <p>{formatToCurrency(product.price)} NGN</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ShopFeed;
