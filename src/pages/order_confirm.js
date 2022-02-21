import BaseLayout from "src/components/BaseLayout/BaseLayout";
import OrderConfirmation from "src/components/OrderConfirmation/OrderConfirmation";

export default function orderConfirm() {
  return (
    <BaseLayout title="Order Confirmation - Fairmall">
      <OrderConfirmation />
    </BaseLayout>
  );
}
