import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Inspirations from "src/components/Inspirations/Inspirations";

export default function Orders() {
  return (
    <BaseLayout title="Inspirations - Fairmall">
      <Inspirations />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
