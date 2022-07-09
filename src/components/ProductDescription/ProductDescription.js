import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/ProductDescription/ProductDescription.module.scss";

function ProductDescription({ product }) {
  console.log("des==", product);
  return (
    <div className={styles.container}>
      <div className={styles.boxGrid}>
        <div className={styles.gallery}>
          <div className={styles.gallery__left}>
            <Image
              // src="/images/product-cover.png"
              loader={() => process.env.APP_URL + product?.images[0].src}
              src={`${process.env.APP_URL}${product?.images[0].src}`}
              alt="Product Name"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.gallery__right}>
            {product?.images.map((image, index) => {
              const img = `${process.env.APP_URL}${image.src}`;
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
            <h4>{product?.categories[0].name}</h4>
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
          <div className={styles.info__3}>
            <p>{product?.price} NGN</p>
            <p>
              Product no:<span>GH-23451</span>
            </p>
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
          <h3>In Stock:</h3>
          <p>{product?.stock_status}</p>
        </div>
        <div className={styles.content__row}>
          <h3>Category:</h3>
          <p>{product?.categories[0].name}</p>
        </div>
        {/* <div className={styles.content__row}>
          <h3>SKU:</h3>
          <p>SKU_DL3ETnJYDyr7QcaJ6</p>
        </div> */}
        <div className={styles.content__row}>
          <h3>Description:</h3>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
