import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionOne from "src/components/Home/SectionOne/SectionOne";
import SectionTwo from "src/components/Home/SectionTwo/SectionTwo";
import SectionThree from "src/components/Home/SectionThree/SectionThree";
import SectionFour from "src/components/Home/SectionFour/SectionFour";
import SectionFive from "src/components/Home/SectionFive/SectionFive";

import styles from "src/components/Home/Home.module.scss";
import { getInspirations } from "src/store/slices/inspirations";

function Home() {
  const dispatch = useDispatch()
  // fetch inspirations
  useEffect(() => {
    dispatch(getInspirations())
  }, [dispatch])
  const { inspirations } = useSelector((state) => state.inspirations)

  return (
    <div className={styles.container}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive inspirations={inspirations} />
    </div>
  );
}

export default Home;
