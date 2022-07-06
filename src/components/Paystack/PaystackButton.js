import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import styles from "src/components/Paystack/Paystack.module.scss";
import { CreateOrder } from "src/utils/woo_commerce";
import Svg from "../Svg/Svg";

function PaystackPayButton() {
  const { shippingDetails, total, lineItems } = useSelector((state) => state.cart);
  const config = {
    reference: new Date().getTime(),
    email: shippingDetails.email,
    amount: total * 100,
    publicKey: process.env.PAYSTACK_PUBLIC_KEY,
  };
  const initializePayment = usePaystackPayment(config);
  const line_items = [];
  lineItems.map((lineItem) => {
    line_items.push({
      product_id: lineItem.product_id,
      quantity: lineItem.quantity,
      variation_id: lineItem.variation_id ? lineItem.variation_id : 0,
    });
  });

  // you can call this function anything
  const onSuccess = async (reference) => {
    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      billing: shippingDetails,
      shipping: shippingDetails,
      line_items,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00",
        },
      ],
    };
    const response = await CreateOrder(data);
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <button
      className={styles.paystackButton}
      onClick={() => {
        initializePayment(onSuccess, onClose);
      }}
    >
      <Svg symbol="paystack" />
      <span>Pay with paystack</span>
    </button>
    // <button
    //   className={styles.paystackButton}
    // onClick={() => {
    //   initializePayment(onSuccess, onClose);
    // }}
    // >
    //   <Svg symbol="facebook" />
    //   Pay with Paystack
    // </button>
  );
}

export default PaystackPayButton;
