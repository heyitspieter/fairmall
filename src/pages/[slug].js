import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import ProductDescription from "src/components/ProductDescription/ProductDescription";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { getProduct } from "src/store/slices/products";
import { useSelector, useDispatch } from "react-redux";

export default function product() {
  const router = useRouter();
  const dispatch = useDispatch()
  const { query: { id }} = router

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])
  const { data, loading } = useSelector((state) => state.products)


  const breadcrumb = [
    {
      id: 1,
      value: "Shop",
      route: "/app",
    },
    {
      id: 2,
      value: "Categories",
      route: "/app",
    },
    {
      id: 3,
      value: "Art & Crafts",
      route: "/app",
    },
    {
      id: 3,
      value: "Product Name Here",
    },
  ];

  return (
    <BaseLayout title={ data && data.name}>
      {
        !loading && (
          <>
            <Breadcrumb product={data} items={breadcrumb} />
            {
              data && (
                <>
                  <ProductDescription product={data} />
                </>
              )
            }
            <Recommendations title="You might also like" />
            <Inspirations />
            <NewsLetter />
          </>
        )
      }

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
