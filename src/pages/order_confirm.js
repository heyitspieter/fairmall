import BaseLayout from "src/components/BaseLayout/BaseLayout";
import OrderConfirmation from "src/components/OrderConfirmation/OrderConfirmation";
import { FetchPaymentGateways } from "src/utils/woo_commerce";

export default function orderConfirm({ checkoutData }) {
  console.log("====================================");
  console.log(checkoutData);
  console.log("====================================");
  return (
    <BaseLayout title="Order Confirmation - Fairmall">
      <OrderConfirmation />
    </BaseLayout>
  );
}

// export async function getStaticProps() {
//   const gateways = [];
//   const payment_gateways = await FetchPaymentGateways().catch((error) => console.error(error));
//   payment_gateways.map((gateway) => {
//     if (gateway.enabled === true) {
//       gateways.push(gateway);
//     }
//   });
//   return {
//     props: {
//       payment_gateways: gateways,
//     },
//     // revalidate: 60 // regenerate page with new data fetch after 60 seconds
//   };
// }
