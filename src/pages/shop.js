import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import { FetchWooCommerceProducts, FetchProductCategories, FetchInspirations, FetchTaxes } from "../utils/woo_commerce";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTax } from "src/store/slices/cartSlice";

export default function shop({ products, categories, inspirations, tax }) {
  console.log("====================================");
  console.log(products);
  console.log("====================================");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTax(tax));
  });

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
  const taxes = await FetchTaxes().catch((error) => console.error(error));
  const vatID = taxes.find((tax) => tax.name === "V.A.T");
  return {
    props: {
      products: products,
      categories: categories,
      inspirations: inspirations,
      tax: vatID,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
}
