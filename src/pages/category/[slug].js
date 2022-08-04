import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import CategoryFeed from "src/containers/CategoryFeed/CategoryFeed";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import { FetchCategoryById, FetchProductByCategory, FetchInspirations, FetchProductCategories } from "src/utils/woo_commerce";
import {getCategory} from "../../store/slices/categories";

export default function category({slug}) {

  const dispatch = useDispatch();

  const {inspirations} = useSelector((state) => state.inspiration)

  useEffect(() => {
    dispatch(getCategory(slug));
  }, [dispatch, slug]);

  const {data, categoryProducts} = useSelector((state) => state.category);

  const breadcrumb = {
    id: data?.category?.id,
    value: data?.category?.name,
    route: "/shop",
  };


  // const items = categoryProducts;
  // const itemsPerPage = 9;
  // // We start with an empty list of items.
  // const [currentItems, setCurrentItems] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // // Here we use item offsets; we could also use page offsets
  // // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);
  //
  // useEffect(() => {
  //   // Fetch items from another resources.
  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   setCurrentItems(items.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(items.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage]);
  //
  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  //   setItemOffset(newOffset);
  // };

  return (
    <BaseLayout title="Category Name - Fairmall">
      <Breadcrumb item={breadcrumb} />
      <CategoryFeed category={data?.category} products={categoryProducts} />
      <Inspirations inspirations={inspirations} />
      <NewsLetter />
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

export async function getStaticProps({ params }) {
  // Fetch data from api server
  const slug = params.slug;

  return {
    props: {
      slug: slug,
    },
  };
}
