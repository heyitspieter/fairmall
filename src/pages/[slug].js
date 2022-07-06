import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import ProductDescription from "src/components/ProductDescription/ProductDescription";
import { FetchProductById } from "src/utils/woo_commerce";
import { useRouter } from "next/router"


export default function product({product}) {

  const router = useRouter();
const data = router.query;

  

  // console.log('product from slug', productsss);

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
    <BaseLayout title="Product Name - Fairmall">
      {/* <Breadcrumb items={breadcrumb} /> */}
      <ProductDescription product={product} />
      <Recommendations title="You might also like" />
      <Inspirations />
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

export async function getStaticProps(context) {
  // Fetch data from api server
  const id = context.params.id;
  const product = await FetchProductById(id).catch((error) => console.error(error));


  return {
    props: {
      product: product
    },
  };
}
