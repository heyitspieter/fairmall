import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import { FetchWooCommerceProducts, FetchProductCategories, FetchInspirations } from "../utils/woo_commerce";

export default function shop({ products, categories, inspirations }) {
  return (
    <BaseLayout title="Shop - Fairmall">
      <ShopFeed products={products} />
      <Categories categories={categories} />
      {/* <Recommendations title="Featured Items" /> */}
      <Inspirations inspirations={inspirations} />
      <NewsLetter />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  /** Fetch all products */
  const products = await FetchWooCommerceProducts().catch((error) => console.error(error));
  const categories = await FetchProductCategories().catch((error) => console.error(error));
  /** find inspiration category */
  const inspirationCategory = categories.find((category) => category.name === "Inspirations");
  const inspirations = await FetchInspirations(inspirationCategory.id).catch((error) => console.error(error));
  return {
    props: {
      products: products,
      categories: categories,
      inspirations: inspirations,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
}
