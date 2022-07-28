import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import { useState } from "react";
import { MaxAmount, MinAmount } from "src/utils/variable_amount";
import { useDispatch } from "react-redux";
import { addLineItem } from "src/store/slices/cartSlice";
import styles from "src/components/ProductDescription/ProductDescription.module.scss";
import formatToCurrency from "src/helpers/formatAmount";

function ProductDescription({ product, variations }) {
  const dispatch = useDispatch();
  const [productVariations, setProductVariations] = useState(variations);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [addToVariationCard, setAddToVariationCard] = useState(true);
  const [variationPrice, setVariationPrice] = useState("Please select a variation");

  const handleSelectedVariation = (variation) => {
    setSelectedVariation(variation);
    setVariationPrice(formatToCurrency(variation.price));
    setAddToVariationCard(false);
  };

  const handleAddToCard = (product) => {
    const lineItem = {
      product_id: product.id,
      variation_id: null,
      name: product.name,
      price: parseFloat(product.price),
      variation: null,

      image: product.image,
      quantity: 1,
      total: product.price * 1,
    };
    dispatch(addLineItem(lineItem));
  };

  const handleAddToCardWithVariation = (product, variation) => {
    const lineItem = {
      product_id: product.id,
      variation_id: variation.id,
      name: product.name,
      price: parseFloat(variation.price),
      variation: variation,
      image: variation.image,
      quantity: 1,
      total: variation.price * 1,
    };
    dispatch(addLineItem(lineItem));
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxGrid}>
        <div className={styles.gallery}>
          <div className={styles.gallery__left}>
            <Image
              // src="/images/product-cover.png"
              loader={() => product?.image}
              src={`${product?.image}`}
              alt="Product Name"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.gallery__right}>
            {product?.additional_images?.map((image, index) => {
              const img = `${image}`;
              return (
                <figure key={index}>
                  <Image loader={() => img} src={img} alt="Product Name" objectFit="cover" layout="fill" />
                </figure>
              );
            })}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__1}>
            <h4>{product?.category?.name}</h4>
            <h3>{product?.name}</h3>
            <p>
              by <span>FAIRMALL</span>
            </p>
          </div>
          <div className={styles.info__2}>
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
            <div className={styles.rating_count}>
              <button>({product?.average_rating})</button>
            </div>
            <div className={styles.rating_btn}>
              <button>Submit a review</button>
            </div>
          </div>
          {variations.variations && (
            <div className={styles.info__2}>
              {product.variation.map((variation, idx) => (
                <div onClick={() => handleSelectedVariation(variation)} key={idx} style={{paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'red', backgroundColor: selectedVariation && selectedVariation.id === variation.id ? "#e11493" : '#828282', marginRight: 5, borderRadius: 30, marginTop: 10, cursor: 'pointer'}}>
                  <p style={{color: "white", fontSize: 12}}>{variation.attribute}: {variation.term}</p>
                </div>
              ))}
            </div>
          )}
          <div className={styles.info__3}>{product && product.variation ? <p>{variationPrice}</p> : <p>{formatToCurrency(product?.price)}</p>}</div>
          <div className={styles.btnAdd}>
            {product.variation ? (
              <button onClick={() => handleAddToCardWithVariation(product, selectedVariation)} disabled={addToVariationCard}>
                <Svg symbol="shopping-basket" />
                <span>Add to Basket</span>
              </button>
            ) : (
              <button onClick={() => handleAddToCard(product)}>
                <Svg symbol="shopping-basket" />
                <span>Add to Basket</span>
              </button>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          <button>
            <Svg symbol="heart-outline" />
          </button>
          <button>
            <Svg symbol="share" />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content__row}>
          <h3>Description</h3>
          <div className={styles.content__html}>
            <p>{product?.description}</p>
          </div>
        </div>
        <div className={styles.content__row}>
          <h3>In Stock:</h3>
          {product?.inventory > 0 ? (
            <p>
              {" "}
              <b>{product?.inventory} </b> items available in Stock
            </p>
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className={styles.content__row}>
          <h3>Category:</h3>
          <p>{product?.category?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
