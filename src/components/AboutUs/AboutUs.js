import Image from "next/image";

import styles from "src/components/AboutUs/AboutUs.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.emblem}>
        <div>
          <Image src="/logo.svg" width={44} height={44} alt="Fairmall" />
        </div>
        <span>
          fair<span>mall</span>
        </span>
      </div>
      <div className={styles.heading}>
        <p>About Us</p>
      </div>
      <div className={styles.content}>
        <p>
          Fairmall is your one stop e-commerce platform dedicated to providing a
          wide variety of locally made products ranging from household items,
          furniture, food, arts, crafts, fashion and agricultural products to
          urbanized working-age customers in Nigeria and diasporan markets who
          are interested in sustainable, eco-friendly consumerism and
          environmentally concious.
        </p>
        <p>“It makes sense ethically, it should make sense financially”</p>
        <p>
          Our primary goal is creating an ecosystem of considerate and conscious
          commerce that ensures fairness to original manufacturers and producers
          in all commercial activities.
        </p>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default AboutUs;
