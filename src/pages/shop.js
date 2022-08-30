import ShopFeed from "src/containers/ShopFeed/ShopFeed";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import Categories from "src/components/Categories/Categories";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Inspirations from "src/components/Home/SectionFive/SectionFive";
import Recommendations from "src/components/Recommendations/Recommendations";

export default function Shop() {
  return (
    <BaseLayout title="Shop - Fairmall">
      <ShopFeed />
      <Categories />
      {/* <Recommendations title="Featured Items" /> */}
      <Inspirations />
      <NewsLetter />
    </BaseLayout>
  );
}
