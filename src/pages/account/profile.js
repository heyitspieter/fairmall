import Profile from "src/containers/Profile/Profile";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function profile() {
  return (
    <BaseLayout title="Profile - Fairmall">
      <Profile />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
