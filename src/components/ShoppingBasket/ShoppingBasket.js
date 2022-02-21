import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/ShoppingBasket/ShoppingBasket.module.scss";

function ShoppingBasket() {
  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image
          src="/svgs/spiral.svg"
          width={361}
          height={364}
          alt="Spiral"
        />
      </div>
      <div className={styles.heading}>
        <p>Basket Items</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__col}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <figure>
                    <Image
                      src="/images/product-thumb.png"
                      objectFit="cover"
                      layout="fill"
                      alt="Product"
                    />
                  </figure>
                </td>
                <td>
                  <div className={styles.desc}>
                    <h4>Keto Hand-made Vase</h4>
                    <p>GH-23451</p>
                  </div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    <button>
                      <Svg symbol="minus" />
                    </button>
                    <input type="text" value="1" />
                    <button>
                      <Svg symbol="plus" />
                    </button>
                  </div>
                </td>
                <td>100,000 NGN</td>
                <td>
                  <div className={styles.action}>
                    <button>
                      <Svg symbol="bin" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image
                      src="/images/product-thumb.png"
                      objectFit="cover"
                      layout="fill"
                      alt="Product"
                    />
                  </figure>
                </td>
                <td>
                  <div className={styles.desc}>
                    <h4>Keto Hand-made Vase</h4>
                    <p>GH-23451</p>
                  </div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    <button>
                      <Svg symbol="minus" />
                    </button>
                    <input type="text" value="1" />
                    <button>
                      <Svg symbol="plus" />
                    </button>
                  </div>
                </td>
                <td>100,000 NGN</td>
                <td>
                  <div className={styles.action}>
                    <button>
                      <Svg symbol="bin" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items (2)</h4>
              <p>200,000 NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>1,000 NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>-</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>201,000 NGN</p>
            </div>
          </div>
          <button className={styles.btnCheckout}>Checkout</button>
        </div>
      </div>
      <div className={spiralRight}>
        <Image
          src="/svgs/spiral.svg"
          width={361}
          height={364}
          alt="Spiral"
        />
      </div>
    </div>
  );
}

export default ShoppingBasket;
