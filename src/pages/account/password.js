// import Password from "src/containers/Password/Password";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";
import PasswordComponent from "src/containers/Password/Password";

export default function Password() {
  return (
    <PrivateRoute>
      <BaseLayout title="Change Password - Fairmall">
        <PasswordComponent />
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
