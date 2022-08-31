import Image from "next/image";
import AuthPrompt from "src/components/AuthPrompt/AuthPrompt";

import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import styles from "src/components/PaymentVerify/PaymentVerify.module.scss";

function PaymentSuccessful() {
  return (
    <div className={styles.content}>
      <figure>
        <Image
          src="/images/payment_successful.png"
          alt="Payment successful"
          width={300}
          height={290}
        />
      </figure>
      <h2>Thank you for your payment</h2>
      <p>Your order has been successfully placed</p>
      <div className={styles.action}>
        <button>View Orders</button>
      </div>
    </div>
  );
}

function PaymentFailed() {
  return (
    <div className={styles.content}>
      <figure>
        <Image
          src="/images/payment_failed.png"
          alt="Payment successful"
          width={320}
          height={240}
        />
      </figure>
      <h2>Payment Failed</h2>
      <p>An error occurred and we couldn&apos;t verify your transaction</p>
      <div className={styles.action}>
        <button>Reload</button>
      </div>
    </div>
  );
}

function PaymentVerify() {
  let status = "error";

  return (
    <>
      <div className={styles.container}>
        <div className={spiralLeft}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
        {status === "success" && <PaymentSuccessful />}
        {status === "error" && <PaymentFailed />}
        <div className={spiralRight}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
      </div>
      {/** You can show this alert by passing the visible prop to the component which is boolean */}
      <AuthPrompt visible />
    </>
  );
}

export default PaymentVerify;
