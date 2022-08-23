import ProfilePage from "src/containers/Profile/Profile";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import PrivateRoute from "src/components/PrivateRoute/PrivateRoute";
import {useEffect} from "react";
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, []);
  return (
    // <PrivateRoute>
      <BaseLayout title="Profile - Fairmall">
        <ProfilePage />
      </BaseLayout>
    // </PrivateRoute>

  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
