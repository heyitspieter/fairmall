import Image from "next/image";
import {useEffect, useState} from "react";
import Svg from "src/components/Svg/Svg";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";
import styles from "src/containers/ShopFeed/ShopFeed.module.scss";
import { useRouter } from "next/router";
import formatToCurrency from "src/helpers/formatAmount";
import { useDispatch } from "react-redux";
import { addLineItem } from "src/store/slices/cartSlice";
import { MaxAmount, MinAmount } from "src/utils/variable_amount";
import { addToFavorites } from "src/store/slices/favorites";
import { toast } from "react-toastify";
// import product from "src/pages/[slug]";

function ShopFeed({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    visibility: false,
  });
  const [selectedProduct, setSelectedProduct] = useState({});
  const [viewProduct, setViewProduct] = useState();

  const sortProducts = [...products];

  sortProducts.sort((a, b) => {
    return b.count - a.count;
  });

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

  const handleFavorite = (product) => {
    let data = {
      product_id: product.id,
    };
    dispatch(addToFavorites(data))
      .then((res) => {
        if (res.payload.status === 200) {
          toast.success(res.payload.data.message);
        } else {
          toast.error(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
            sortProducts.slice(0).map((product, i) => {
              const img = product?.product.image;
              return (
                <div key={i} className={styles.grid__item}>
                  <figure>
                    <Image loader={() => img} objectFit="cover" alt={product.name} src={img} layout="fill" />
                    <div className={styles.grid__item_options}>
                      {!product?.product?.variation && (
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
                      <button onClick={() => handleFavorite(product)}>
                        <span>Save</span>
                        <Svg symbol="heart-outline" />
                      </button>
                    </div>
                  </figure>
                  <h3>{product?.product?.name}</h3>
                  {product?.product?.variation ? (
                    <p>
                      {formatToCurrency(MinAmount(product?.product?.variation))} - {formatToCurrency(MaxAmount(product?.product?.variation))}
                    </p>
                  ) : (
                    <p>{formatToCurrency(product?.product?.price)}</p>
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
