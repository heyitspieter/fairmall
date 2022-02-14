import Home from "src/components/Home/Home";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import NewsLetter from "src/components/NewsLetter/NewsLetter";

export default function home() {
  return (
    <BaseLayout title="Fairmall - Home">
      <Home />
      <NewsLetter />
    </BaseLayout>
  );
}
