import Image from "next/image";
import { useRouter } from "next/router";
import Svg from "src/components/Svg/Svg";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/ShoppingBasket/ShoppingBasket.module.scss";
import { addLineItem, cartSubTotal, decrementLineItemQuantity, removeLineItem } from "src/store/slices/cartSlice";
import { getGeneral } from "src/store/slices/general";
import { TaxCalCulator } from "src/utils/tax_calculator";

function ShoppingBasket() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  /** Get user cart */
  const { lineItems, tax } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getGeneral());
  }, [dispatch]);

  const { general } = useSelector((state) => state.general);

  useEffect(() => {
    /** calculate tax */
    setTaxAmount(TaxCalCulator(subTotal, parseFloat(general.tax)));
  }, [subTotal, general.tax] );

  useEffect(() => {
    if (lineItems.length > 0) {
      const cartTotal = lineItems.reduce((total, obj) => obj.total + total, 0);
      setSubTotal(cartTotal);
      setIsValid(false);
    } else {
      setSubTotal(0);
      setIsValid(true);
    }
  }, [lineItems], );

  useEffect(() => {
    setTotal(subTotal + taxAmount);
  }, [subTotal, taxAmount], );

  useEffect(() => {
    const cartAmount = {
      subTotal: subTotal,
      total: total,
      rate: taxAmount,
    };
    dispatch(cartSubTotal(cartAmount));
  }, [total, subTotal, taxAmount]);

  const handleIncrement = (product) => {
    dispatch(addLineItem(product));
  };

  const handleDecrement = (product) => {
    dispatch(decrementLineItemQuantity(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeLineItem(product));
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
              {lineItems && lineItems.length > 0 ? (
                lineItems.map((product, idx) => (
                  <tr key={idx}>
                    <td>
                      <figure>
                        <Image unoptimized={true} loader={() => `${product.image}`} src={`${product.image}`} objectFit="cover" alt="Slide 1" layout="fill" />
                      </figure>
                    </td>
                    <td>
                      <div className={styles.desc}>
                        <h4>{product.name}</h4>
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
                        <button onClick={() => handleRemoveItem(product)}>
                          <Svg symbol="bin" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tbody>
                  <tr>
                    <td>
                      <p>No items in your cart</p>
                      <p>
                        <button onClick={() => router.push("/shop")} className={styles.btnCheckout}>
                          Continue Shopping
                        </button>
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items ({lineItems.length})</h4>
              <p>{subTotal.toLocaleString("en-US")} NGN</p>
            </div>
            {/* <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>1,000 NGN</p>
            </div> */}
            <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>{taxAmount.toLocaleString("en-US")} NGN</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>{total.toLocaleString("en-US")} NGN</p>
            </div>
          </div>
          <button
            disabled={isValid}
            onClick={() => {
              router.push({
                pathname: "/checkout",
                query: { lineItems: lineItems },
              });
              // router.push("/checkout")
            }}
            className={styles.btnCheckout}
          >
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
