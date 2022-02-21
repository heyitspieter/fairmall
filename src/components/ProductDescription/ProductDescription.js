import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/ProductDescription/ProductDescription.module.scss";

function ProductDescription() {
  return (
    <div className={styles.container}>
      <div className={styles.boxGrid}>
        <div className={styles.gallery}>
          <div className={styles.gallery__left}>
            <Image
              src="/images/product-cover.png"
              alt="Product Name"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.gallery__right}>
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
            </figure>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info__1}>
            <h4>Arts and Crafts</h4>
            <h3>Product name here</h3>
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
              <button>(20)</button>
            </div>
            <div className={styles.rating_btn}>
              <button>Submit a review</button>
            </div>
          </div>
          <div className={styles.info__3}>
            <p>100,000 NGN</p>
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
          <h3>Description</h3>
          <div className={styles.content__html}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in
              ipsum auctor hendrerit neque, in. Neque, cursus dui elementum id.
              Egestas malesuada eu magna neque, amet tellus adipiscing. Eu
              adipiscing pretium nunc potenti id dui. Egestas eu ut quam
              venenatis rhoncus orci duis eu diam. Pharetra, consequat arcu ut
              fermentum tortor imperdiet lorem cursus. At et mi feugiat quisque
              sapien nisi sit. Elit aliquet sem risus lacus viverra. Amet,
              adipiscing aliquet sed quis vulputate consectetur dui rhoncus
              magna. Sed amet nulla nisi, pretium, lectus. Eget sed aliquet
              vestibulum aliquam condimentum dui placerat urna sit. Adipiscing
              arcu neque, blandit enim.
            </p>
            <p>
              Viverra in faucibus faucibus vitae, interdum a. Nunc, urna, amet
              ipsum ante faucibus a fames eget. Hendrerit tellus, mauris congue
              blandit eu orci. Phasellus eu eget viverra aenean. Egestas sit
              aliquet nibh nunc viverra. Nunc id euismod mattis diam. Lacus
              elit, duis rhoncus, commodo vel arcu. Cursus sit tincidunt fames
              aliquam, quis aliquam turpis ultrices consequat. Mi nisi, cum
              dictum felis aenean tellus.
            </p>
            <p>
              Id nulla vitae non turpis. Praesent blandit lobortis cras nisi
              egestas at leo, sed. Est vitae in neque, amet. Nulla arcu, aenean
              eget sed justo, euismod. Lacinia massa nulla orci, at donec sed
              faucibus integer sit. Sed adipiscing ultricies sapien, sed ut.
              Feugiat nibh id placerat justo, nulla lobortis facilisi gravida
              dictum. In mauris duis ut non, augue mattis. Et enim nam arcu nec.
              Turpis.
            </p>
          </div>
        </div>
        <div className={styles.content__row}>
          <h3>In Stock:</h3>
          <p>Yes</p>
        </div>
        <div className={styles.content__row}>
          <h3>Category:</h3>
          <p>Arts & Crafts</p>
        </div>
        <div className={styles.content__row}>
          <h3>SKU:</h3>
          <p>SKU_DL3ETnJYDyr7QcaJ6</p>
        </div>
        <div className={styles.content__row}>
          <h3>Specifications:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in ipsum
            auctor hendrerit neque, in. Neque, cursus dui elementum id. Egestas
            malesuada eu magna neque, amet tellus adipiscing. Eu adipiscing
            pretium nunc potenti id dui. Egestas eu ut quam venenatis rhoncus
            orci duis eu diam. Pharetra, consequat arcu ut fermentum tortor
            imperdiet lorem cursus. At et mi feugiat quisque sapien nisi sit.
            Elit aliquet sem risus lacus viverra. Amet, adipiscing aliquet sed
            quis vulputate consectetur dui rhoncus magna. Sed amet nulla nisi,
            pretium, lectus. Eget sed aliquet vestibulum aliquam condimentum dui
            placerat urna sit. Adipiscing arcu neque, blandit enim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
