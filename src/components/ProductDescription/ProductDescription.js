import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import {useEffect, useState} from "react";
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
  const [variationTerm, setVariationTerm] = useState([]);


  useEffect(() => {
    if(product.variations) {
      const variation_data = product.variations.map((variation, idx) => {
        const variation_term_key = Object.keys(variation.term)
        return (
          <div onClick={() => handleSelectedVariation(variation)} key={idx} style={{paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 10, borderWidth: 1, borderColor: 'red', backgroundColor: selectedVariation && selectedVariation.id === variation.id ? "#e11493" : '#828282', marginRight: 5, borderRadius: 30, marginTop: 10, cursor: 'pointer'}}>
            <div>
              {
                variation_term_key.map((term, idx) => (
                  <span key={idx} style={{color: "white", fontSize: 12, marginRight: 5}}>{variation.term[term]}</span>
                ))
              }
            </div>
          </div>
        )
      })
      setVariationTerm(variation_data);
    }
  }, [selectedVariation])


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
      image: product.image,
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
              loader={() => product?.product?.image}
              src={`${product?.product?.image}`}
              unoptimized={true}
              alt="Product Name"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.gallery__right}>
            {product?.product?.additional_images?.map((image, index) => {
              const img = `${image}`;
              return (
                <figure key={index}>
                  <Image unoptimized={true} loader={() => img} src={img} alt="Product Name" objectFit="cover" layout="fill" />
                </figure>
              );
            })}
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__1}>
            <h4>{product?.product?.category?.name}</h4>
            <h3>{product?.product?.name}</h3>
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
              {/*<button>({product?.average_rating})</button>*/}
            </div>
            <div className={styles.rating_btn}>
              <button>Submit a review</button>
            </div>
          </div>
          {product.variations && (
            <div className={styles.info__2}>
              {variationTerm}
            </div>
          )}
          <div className={styles.info__3}>{product.variations ? <p>{variationPrice}</p> : <p>{formatToCurrency(product?.product?.price)}</p>}</div>
          <div className={styles.btnAdd}>
            {product.variations ? (
              <button onClick={() => handleAddToCardWithVariation(product.product, selectedVariation)} disabled={addToVariationCard} style={{backgroundColor: addToVariationCard ? "#CCC" : "#e11493"}}>
                <Svg symbol="shopping-basket" />
                <span>Add to Basket</span>
              </button>
            ) : (
              <button onClick={() => handleAddToCard(product.product)}>
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
            <p>{product?.product?.description}</p>
          </div>
        </div>
        <div className={styles.content__row}>
          <h3>In Stock:</h3>
          {product?.product?.inventory > 0 ? (
            <p>
              {" "}
              <b>{product?.product?.inventory} </b> items available in Stock
            </p>
          ) : (
            <p>Not available</p>
          )}
        </div>
        <div className={styles.content__row}>
          <h3>Category:</h3>
          <p>{product?.product?.category?.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
