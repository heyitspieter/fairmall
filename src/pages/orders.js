import Orders from "src/components/Orders/Orders";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";

export default function orders() {
  return (
    <BaseLayout title="My Orders - Fairmall">
      <PrivateRoute>
      <Orders />
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
