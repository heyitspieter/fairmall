import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";
import ProductDescription from "src/components/ProductDescription/ProductDescription";

export default function Product() {
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
    <BaseLayout>
      {/*<Breadcrumb data={data} items={breadcrumb} />*/}
      <ProductDescription />
      {/* <Recommendations title="You might also like" /> */}
      <Inspirations />
      <NewsLetter />
    </BaseLayout>
  );
}
