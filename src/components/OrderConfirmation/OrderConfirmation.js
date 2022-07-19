import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/OrderConfirmation/OrderConfirmation.module.scss";
import PaystackPayButton from "../Paystack/PaystackButton";

function OrderConfirmation() {
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
          <button className={styles.btnWhatsapp}>
            <Svg symbol="whatsapp" />
            <span>WhatsApp Order</span>
          </button>
          <button className={styles.btnChatbot}>
            <Svg symbol="chatbot" />
            <span>Order Via Chatbot</span>
          </button>
          <PaystackPayButton />
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
