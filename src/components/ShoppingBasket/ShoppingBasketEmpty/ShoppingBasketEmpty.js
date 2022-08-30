import Image from "next/image";
import { useRouter } from "next/router";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/ShoppingBasket/ShoppingBasket.module.scss";

function ShoppingBasketEmpty() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
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
                  <p>No items in your cart</p>
                  <p>
                    <button
                      className={styles.btnCheckout}
                      onClick={() => router.push("/shop")}
                    >
                      Continue Shopping
                    </button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items (0)</h4>
              <p>0.00 NGN</p>
            </div>
            {/* <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>1,000 NGN</p>
            </div> */}
            <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>0.00 NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>0.00 NGN</p>
            </div>
          </div>
          <button disabled={true} className={styles.btnCheckout}>
            Checkout
          </button>
        </div>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default ShoppingBasketEmpty;
