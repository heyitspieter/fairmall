import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionOne from "src/components/Home/SectionOne/SectionOne";
import SectionTwo from "src/components/Home/SectionTwo/SectionTwo";
import SectionThree from "src/components/Home/SectionThree/SectionThree";
import SectionFour from "src/components/Home/SectionFour/SectionFour";
import SectionFive from "src/components/Home/SectionFive/SectionFive";

import styles from "src/components/Home/Home.module.scss";
import { getInspirations } from "../../store/slices/inspirations";
import { getGeneral } from "../../store/slices/general";

function Home() {
  const dispatch = useDispatch();

  // fetch inspirations
  useEffect(() => {
    dispatch(getInspirations());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGeneral());
  }, [dispatch]);

  const { inspirations } = useSelector((state) => state.inspiration);

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
