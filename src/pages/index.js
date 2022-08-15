import * as HomeComponent from "src/components/Home/Home";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <BaseLayout title="Fairmall - Home">
      <HomeComponent />
      <NewsLetter />
    </BaseLayout>
  );
}
