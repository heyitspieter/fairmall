import Orders from "src/components/Orders/Orders";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "src/store/slices/orders";

export default function orders() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <BaseLayout title="My Orders - Fairmall">
      <PrivateRoute>
        <Orders orders={orders} />
      </PrivateRoute>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
