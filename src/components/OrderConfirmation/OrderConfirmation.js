import Image from "next/image";
import Svg from "src/components/Svg/Svg";
import { toast } from "react-toastify";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/OrderConfirmation/OrderConfirmation.module.scss";
import { useEffect } from "react";
import { getOrdersData, createOrder } from "src/store/slices/orders";
import { useDispatch, useSelector } from "react-redux";
import {resetCartState} from "../../store/slices/cartSlice";

function OrderConfirmation() {
  const dispatch = useDispatch();
  const { general } = useSelector((state) => state.general);
  const { shippingDetails, total, lineItems, rate } = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(getOrdersData());
  }, [dispatch]);

  const handleCreateOrder = (method) => {
    const products = [];
    lineItems.map((item) => {
      products.push({
        product_id: item.product_id,
        variation_id: item.variation_id,
        quantity: item.quantity,
        price: item.price,
      });
    });
    const data = {
      firstname: shippingDetails.first_name,
      lastname: shippingDetails.last_name,
      email: shippingDetails.email,
      phone: shippingDetails.phone,
      location: {
        address1: shippingDetails.address_1,
        address2: shippingDetails.address_2,
        country: shippingDetails.country,
        state: shippingDetails.state,
        city: shippingDetails.city,
        postcode: shippingDetails.postcode,
      },
      products,
      payment_method: method.type,
      tax: rate,
      shipping_cost: general.shipping_cost,
      total: total,
    };

    dispatch(createOrder(data))
      .then((res) => {
        if (res.payload.data.data.authorization_url) {
          window.location = res.payload.data.data.authorization_url;
        } else {
          toast.success(res.payload.data.data.message);
          dispatch(resetCartState());
          setTimeout(() => {
            window.location.href = "/shop";
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.heading}>
        <p>Order Confirmation</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__col}>
          {/* <p>
            Confirm your order <span>#12F78GQ</span> via WhatsApp or Chatbot for delivery.
          </p> */}
        </div>
        <div className={styles.grid__col}>
          <div className={styles.barcode}>
            <Image src="/images/barcode.png" objectFit="cover" layout="fill" alt="barcode" />
          </div>
          <p>You can also scan the QR code to continue and confirm for order for delivery.</p>
        </div>
        <div className={styles.separator}>
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <div className={styles.grid__col}>
          {general?.payment_methods?.map((method, idx) => (
            <button key={idx} onClick={() => handleCreateOrder(method)} className={styles.btnChatbot}>
              {/* <Svg symbol="whatsapp" /> */}
              <span>{method.text}</span>
            </button>
          ))}
          <p>After order confirmation by our representative, you will be directed on payment details and procedure for delivery.</p>
        </div>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default OrderConfirmation;
