import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import ShoppingBasket from "src/components/ShoppingBasket/ShoppingBasket";

export default function basket() {

  return (
    <BaseLayout title="My Basket - Fairmall">
      <ShoppingBasket />
    </BaseLayout>
  );
}
