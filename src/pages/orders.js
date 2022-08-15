import Orders from "src/components/Orders/Orders";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "src/store/slices/orders";
import {useRouter} from "next/router";

export default function Orders() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, []);
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <BaseLayout title="My Orders - Fairmall">
      {/*<PrivateRoute>*/}
        <Orders orders={orders} />
      {/*</PrivateRoute>*/}
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
