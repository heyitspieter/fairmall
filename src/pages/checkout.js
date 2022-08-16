import * as CheckoutComponent from "src/containers/Checkout/Checkout";
import BaseLayout from "src/components/BaseLayout/BaseLayout";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Checkout() {
  const router = useRouter()
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/signin");
  //   }
  // }, []);
  return (
    <BaseLayout title="Checkout - Fairmall">
      <CheckoutComponent />
    </BaseLayout>
  );
}
