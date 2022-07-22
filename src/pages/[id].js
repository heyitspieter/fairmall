import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import ProductDescription from "src/components/ProductDescription/ProductDescription";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getProduct } from "src/store/slices/products";
import { useSelector, useDispatch } from "react-redux";
import { getInspirations } from "src/store/slices/inspirations";

export default function product({ cont }) {
  const router = useRouter();
  const dispatch = useDispatch();

  console.log("====================================");
  console.log(cont);
  console.log("====================================");

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  // const { data, loading } = useSelector((state) => state.products);
  const data = null;

  useEffect(() => {
    dispatch(getInspirations());
  }, [dispatch]);
  const { inspirations } = useSelector((state) => state.inspirations);

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
    <BaseLayout title={data && data.name}>
      {!loading && (
        <>
          {/* <Breadcrumb data={data} items={breadcrumb} /> */}
          {/* <ProductDescription product={data} /> */}
          <Recommendations title="You might also like" />
          <Inspirations inspirations={inspirations} />
          <NewsLetter />
        </>
      )}
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

export async function getStaticProps(context) {
  // Fetch data from api server
  const cont = context.id;
  console.log("====================================");
  console.log(id);
  console.log("====================================");

  return {
    props: {
      cont: cont,
    },
  };
}
