import Image from "next/image";
import { useState } from "react";
import Svg from "src/components/Svg/Svg";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";
import styles from "src/containers/ShopFeed/ShopFeed.module.scss";
import { useRouter } from "next/router";
import formatToCurrency from "src/helpers/formatAmount";
import { useDispatch } from "react-redux";
import { addLineItem } from "src/store/slices/cartSlice";
import { MaxAmount, MinAmount } from "src/utils/variable_amount";
// import product from "src/pages/[slug]";

function ShopFeed({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    visibility: false,
  });
  const [selectedProduct, setSelectedProduct] = useState({});
  const [viewProduct, setViewProduct] = useState();

  console.log("===products===", products);

  const handleAddToCard = async (product) => {
    const lineItem = {
      product_id: product.id,
      variation_id: product.vatiation ? product.variation.id : null,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
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
              const img = product.image;
              return (
                <div key={i} className={styles.grid__item}>
                  <figure>
                    <Image loader={() => img} objectFit="cover" alt={product.name} src={img} layout="fill" />
                    <div className={styles.grid__item_options}>
                      {!product.variation && (
                        <button onClick={() => handleAddToCard(product)}>
                          <span>Add to Basket</span>
                          <Svg symbol="shopping-basket" />
                        </button>
                      )}
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
                  {product.variation ? (
                    <p>
                      {formatToCurrency(MinAmount(product.variation))} - {formatToCurrency(MaxAmount(product.variation))}
                    </p>
                  ) : (
                    <p>{formatToCurrency(product.price)}</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ShopFeed;
