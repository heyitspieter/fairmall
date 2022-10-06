import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "src/store/slices/products";
import formatToCurrency from "src/helpers/formatAmount";
import { addLineItem } from "src/store/slices/cartSlice";
import { addToFavorites } from "src/store/slices/favorites";
import { MaxAmount, MinAmount } from "src/utils/variable_amount";
import ProductModal from "src/components/Modals/ProductModal/ProductModal";
import ShopFeedLoadingSkeleton from "src/components/UI/LoadingSkeletons/ShopFeedLoadingSkeleton";

import styles from "src/containers/ShopFeed/ShopFeed.module.scss";

function ShopFeed() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    visibility: false,
  });

  const token = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(true);

  const [viewProduct, setViewProduct] = useState(null);

  const [sortedProducts, setSortedProducts] = useState([]);

  const { products } = useSelector((state) => state.product);

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products && products?.length) {
      const newProducts = [...products];

      newProducts.sort((a, b) => {
        return b.count - a.count;
      });

      setIsLoading(false);

      setSortedProducts(newProducts);
    }
  }, [products]);

  const handleAddToCard = async (product) => {
    const lineItem = {
      product_id: product.product.id,
      variation_id: product.product.variation
        ? product.product.variation.id
        : null,
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

  if (isLoading) {
    return <ShopFeedLoadingSkeleton />;
  }

  return (
    <>
      <ProductModal
        product={selectedProduct}
        show={modal.visibility}
        close={toggleModalHandler}
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>Popular Items</p>
        </div>
        <div className={styles.grid}>
          {sortedProducts.map(({ product }, i) => {
            const img = product.image;

            return (
              <div key={i} className={styles.grid__item}>
                <figure>
                  {/* removed loader property & added path to domains list in next config file */}
                  <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    alt={product.name}
                  />
                  <div className={styles.grid__item_options}>
                    {!product?.variation && (
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
                    {token !== null && (
                      <button onClick={() => handleFavorite(product)}>
                        <span>Save</span>
                        <Svg symbol="heart-outline" />
                      </button>
                    )}
                  </div>
                </figure>
                <h3>{product?.name}</h3>
                {product?.variation ? (
                  <p>
                    {formatToCurrency(MinAmount(product?.variation))} -{" "}
                    {formatToCurrency(MaxAmount(product?.variation))}
                  </p>
                ) : (
                  <p>{formatToCurrency(product?.price)}</p>
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

{
  /* <div className={styles.heading} style={{ marginTop: 100, marginBottom: 100 }}>
        <p>No products found</p>
     </div> */
}
