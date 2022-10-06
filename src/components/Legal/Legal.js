import Image from "next/image";

import styles from "src/components/Legal/Legal.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Legal() {
  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.content}>
        <iframe
          style={{ width: "100%", height: "800px" }}
          src="/docs/Fairmall.ng_Terms of Use.pdf"
        />
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default Legal;
