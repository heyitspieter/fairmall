import SectionOne from "src/components/Home/SectionOne/SectionOne";
import SectionTwo from "src/components/Home/SectionTwo/SectionTwo";
import SectionThree from "src/components/Home/SectionThree/SectionThree";
import SectionFour from "src/components/Home/SectionFour/SectionFour";
import SectionFive from "src/components/Home/SectionFive/SectionFive";

import styles from "src/components/Home/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default Home;
