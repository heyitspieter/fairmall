import Image from "next/image";
import { useEffect, useState } from "react";
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

  const token = localStorage.getItem("token");

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
      product_id: product.product.id,
      variation_id: product.product.variation ? product.product.variation.id : null,
      name: product.product.name,
      price: parseFloat(product.product.price),
      image: product.product.image,
      quantity: 1,
      total: product.product.price * 1,
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
          {!!products && products.length > 0 ? (
            sortProducts.map((product, i) => {
              // console.log(product)
              const popularProduct = product.product
              const img = popularProduct.image;
              return (
                <div key={i} className={styles.grid__item}>
                  <figure>
                    <Image loader={() => img} objectFit="cover" alt={popularProduct.name} src={img} layout="fill" />
                    <div className={styles.grid__item_options}>
                      {!popularProduct?.variation && (
                        <button onClick={() => handleAddToCard(product)}>
                          <span>Add to Basket</span>
                          <Svg symbol="shopping-basket" />
                        </button>
                      )}
                      <button
                        //  onClick={toggleModalHandler}
                        onClick={() => {
                          setSelectedProduct(popularProduct);
                          toggleModalHandler();
                          // singleProduct(product.id)
                        }}
                      >
                        <span>Quick View</span>
                        <Svg symbol="eye" />
                      </button>
                      {
                        token !== null && (
                          <button onClick={() => handleFavorite(popularProduct)}>
                            <span>Save</span>
                            <Svg symbol="heart-outline" />
                          </button>
                        )
                      }

                    </div>
                  </figure>
                  <h3>{popularProduct?.name}</h3>
                  {popularProduct?.variation ? (
                    <p>
                      {formatToCurrency(MinAmount(popularProduct?.variation))} - {formatToCurrency(MaxAmount(popularProduct?.variation))}
                    </p>
                  ) : (
                    <p>{formatToCurrency(popularProduct?.price)}</p>
                  )}
                </div>
              );
            })
          ): (
            <div className={styles.heading} style={{marginTop: 100, marginBottom: 100}}>
              <p>
                No products found
              </p>
            </div>
          )
          }
        </div>
      </div>
    </>
  );
}

export default ShopFeed;
