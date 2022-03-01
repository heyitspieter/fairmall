import Order from "src/components/Order/Order";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function order() {
  return (
    <BaseLayout title="Order 12F78GQ - Fairmall">
      <Order />
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  let paths = [];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  // Fetch data from api server

  return {
    props: {},
  };
}
