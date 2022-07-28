import Password from "src/containers/Password/Password";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";

export default function password() {
  return (
    <PrivateRoute>
      <BaseLayout title="Change Password - Fairmall">
        <Password />
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
