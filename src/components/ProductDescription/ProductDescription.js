import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import { useState } from "react";

import styles from "src/components/ProductDescription/ProductDescription.module.scss";
import formatToCurrency from "src/helpers/formatAmount";

function ProductDescription({ product, variations }) {
  // console.log("product single", variations);
  const [productVariations, setProductVariations] = useState(variations);
  const [selectedAttribute, setSelectedAttribute] = useState(null);
  const [attributeTerms, setAttributeTerms] = useState([]);

  const handleAttributeChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      setSelectedAttribute(value);
    } else {
      setSelectedAttribute(null);
    }
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

            {/* <figure>
              <Image
                src="/images/product-thumb.png"
                alt="Product Name"
                objectFit="cover"
                layout="fill"
              />
            </figure>
            <figure>
              <Image
                src="/images/product-thumb.png"
                alt="Product Name"
                objectFit="cover"
                layout="fill"
              />
            </figure>
            <figure>
              <Image
                src="/images/product-thumb.png"
                alt="Product Name"
                objectFit="cover"
                layout="fill"
              />
            </figure> */}
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
              <div className={styles.info__3}>
                <select onChange={handleAttributeChange}>
                  <option value="">Select Size</option>
                  {product.attributes.map((attribute, idx) => {
                    return (
                      <option key={idx} value={attribute.name}>
                        {attribute.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {selectedAttribute && (
                <div className={styles.info__3}>
                  <select>
                    <option>Select {selectedAttribute}</option>
                  </select>
                </div>
              )}
            </div>
          )}
          <div className={styles.info__3}>
            <p>{formatToCurrency(product.price)} NGN</p>
          </div>
          <div className={styles.btnAdd}>
            <button>
              <Svg symbol="shopping-basket" />
              <span>Add to Basket</span>
            </button>
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
