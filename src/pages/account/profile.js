import Profile from "src/containers/Profile/Profile";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";

export default function profile() {
  return (
    <PrivateRoute>
      <BaseLayout title="Profile - Fairmall">
        <Profile />
      </BaseLayout>
    </PrivateRoute>

  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
