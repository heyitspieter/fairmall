import Orders from "src/components/Orders/Orders";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function orders() {
  return (
    <BaseLayout title="My Orders - Fairmall">
      <Orders />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
