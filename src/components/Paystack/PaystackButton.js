import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import styles from "src/components/Paystack/Paystack.module.scss";
import Svg from "../Svg/Svg";

function PaystackPayButton() {
  const { shippingDetails, total } = useSelector((state) => state.cart);
  const config = {
    reference: new Date().getTime(),
    email: shippingDetails.email,
    amount: total,
    publicKey: process.env.PAYSTACK_PUBLIC_KEY,
  };
  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
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
