import * as OrderComponent from "src/components/Order/Order";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Order() {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, []);
  return (
    <BaseLayout title="Order 12F78GQ - Fairmall">
      <OrderComponent />
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
