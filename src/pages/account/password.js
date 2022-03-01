import Password from "src/containers/Password/Password";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function password() {
  return (
    <BaseLayout title="Change Password - Fairmall">
      <Password />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
