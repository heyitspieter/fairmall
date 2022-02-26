import SavedItems from "src/components/SavedItems/SavedItems";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import Recommendations from "src/components/Recommendations/Recommendations";

export default function saved() {
  return (
    <BaseLayout title="Saved Items - Fairmall">
      <SavedItems />
      <Recommendations title="Recommended Items" />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
