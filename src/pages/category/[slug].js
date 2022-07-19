import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import CategoryFeed from "src/containers/CategoryFeed/CategoryFeed";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import { FetchCategoryById, FetchProductByCategory, FetchInspirations, FetchProductCategories } from "src/utils/woo_commerce";

export default function category({ products, category, inspirations }) {
  const breadcrumb = {
    id: category.id,
    value: category.name,
    route: "/shop",
  };

  const items = products;
  const itemsPerPage = 9;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <BaseLayout title="Category Name - Fairmall">
      <Breadcrumb item={breadcrumb} />
      <CategoryFeed products={currentItems} handlePageClick={handlePageClick} pageCount={pageCount} />
      <Inspirations inspirations={inspirations} />
      <NewsLetter />
    </BaseLayout>
  );
}

export async function getServerSideProps({ params }) {
  /** find all product in a category */
  const products = await FetchProductByCategory(params.slug).catch((error) => console.error(error));
  /** find category by id */
  const category = await FetchCategoryById(params.slug).catch((error) => console.error(error));
  /** fetch categories */
  const categories = await FetchProductCategories().catch((error) => console.error(error));
  /** find inspiration category */
  const inspirationCategory = categories.find((category) => category.name === "Inspirations");
  const inspirations = await FetchInspirations(inspirationCategory.id).catch((error) => console.error(error));
  return {
    props: {
      products: products,
      category: category,
      inspirations: inspirations,
    },
  };
}
