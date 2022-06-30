import Image from "next/image";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/ShoppingBasket/ShoppingBasket.module.scss";
import { addLineItem, decrementLineItemQuantity, removeLineItem } from "src/store/slices/cartSlice";

function ShoppingBasket() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  /** Get user cart */
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (cart.lineItems.length > 0) {
      const cartTotal = cart.lineItems.reduce((total, obj) => obj.total + total, 0);
      setTotal(cartTotal);
    }
  });

  const handleIncrement = (product) => {
    dispatch(addLineItem(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementLineItemQuantity(product));
  };

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
              {cart && cart.lineItems.length > 0 ? (
                cart.lineItems.map((product, idx) => (
                  <tr key={idx}>
                    <td>
                      <figure>
                        <Image loader={() => `${process.env.APP_URL}${product.image}`} src={`${process.env.APP_URL}${product.image}`} objectFit="cover" alt="Slide 1" layout="fill" />
                      </figure>
                    </td>
                    <td>
                      <div className={styles.desc}>
                        <h4>{product.name}</h4>
                        {/* <p>GH-23451</p> */}
                      </div>
                    </td>
                    <td>
                      <div className={styles.quantity}>
                        <button onClick={() => handleDecrement(product)}>
                          <Svg symbol="minus" />
                        </button>
                        <input onChange={() => {}} type="text" value={product.quantity} />
                        <button onClick={() => handleIncrement(product)}>
                          <Svg symbol="plus" />
                        </button>
                      </div>
                    </td>
                    <td>{parseInt(product.price * product.quantity).toLocaleString("en-US")} NGN</td>
                    <td>
                      <div className={styles.action}>
                        <button>
                          <Svg symbol="bin" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr colSpan="5">
                  <td>
                    <p>No items in your cart</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items ({cart.lineItems.length})</h4>
              <p>{total.toLocaleString("en-US")} NGN</p>
            </div>
            {/* <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>1,000 NGN</p>
            </div> */}
            {/* <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>-</p>
            </div> */}
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>{total.toLocaleString("en-US")} NGN</p>
            </div>
          </div>
          <button onClick={() => router.push("/checkout")} className={styles.btnCheckout}>
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

export default ShoppingBasket;
