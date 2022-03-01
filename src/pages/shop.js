import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";

export default function shop() {
  return (
    <BaseLayout title="Shop - Fairmall">
      <ShopFeed />
      <Categories />
      <Recommendations title="Featured Items" />
      <Inspirations />
      <NewsLetter />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
