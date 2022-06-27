import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import { fetchWooCommerceProducts } from "../utils/woo_commerce";

export default function shop({ products }) {
  return (
    <BaseLayout title="Shop - Fairmall">
      <ShopFeed products={products} />
      <Categories />
      <Recommendations title="Featured Items" />
      <Inspirations />
      <NewsLetter />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  /** Fetch all products */
  const response = await fetchWooCommerceProducts().catch((error) => console.error(error));
  return {
    props: {
      products: response.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
}
