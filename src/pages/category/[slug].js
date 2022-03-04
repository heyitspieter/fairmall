import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Breadcrumb from "src/components/Breadcrumb/Breadcrumb";
import NewsLetter from "src/containers/NewsLetter/NewsLetter";
import CategoryFeed from "src/containers/CategoryFeed/CategoryFeed";
import Inspirations from "src/components/Home/SectionFive/SectionFive";

export default function category() {
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
      value: "Furniture",
      route: "/app",
    },
  ];

  return (
    <BaseLayout title="Category Name - Fairmall">
      <Breadcrumb items={breadcrumb} />
      <CategoryFeed />
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

export async function getStaticProps() {
  // Fetch data from api server

  return {
    props: {},
  };
}
