import Faq from "src/containers/Faq/Faq";
import AboutUs from "src/components/AboutUs/AboutUs";
import Contact from "src/containers/Contact/Contact";
import BaseLayout from "src/components/BaseLayout/BaseLayout";

export default function About() {
  return (
    <BaseLayout title="About Us - Fairmall">
      <AboutUs />
      <Faq />
      <Contact />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  // Fetch data from api server
  return {
    props: {},
  };
}
