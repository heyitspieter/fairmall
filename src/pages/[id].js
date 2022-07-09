import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import ProductDescription from "src/components/ProductDescription/ProductDescription";
import { FetchProductById } from "src/utils/woo_commerce";
import { useRouter } from "next/router";

export default function product({ product }) {
  const router = useRouter();
  const breadcrumb = {
    id: product?.id,
    value: product?.name,
    route: "/shop",
  };

  return (
    <BaseLayout title="Product Name - Fairmall">
      <Breadcrumb item={breadcrumb} />
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
      product: product,
    },
  };
}
