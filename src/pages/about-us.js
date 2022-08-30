import Faq from "src/containers/Faq/Faq";
import AboutUs from "src/components/AboutUs/AboutUs";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function About() {
  return (
    <BaseLayout title="About Us - Fairmall">
      <AboutUs />
      <Faq />
    </BaseLayout>
  );
}