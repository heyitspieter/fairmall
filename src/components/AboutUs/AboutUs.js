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
          Fair Mall is a source aggregator which connects producers of indigenous Nigerian
          commodities with premium markets and opportunities, enabled by trade. Our goal is
          to help individuals and businesses easily discover quality locally-produced goods
          while providing indigenous producers with access to a wider customer network and
          business support, all at a fair rate for producers and consumers. We ensure that
          producers receive premium value for their wares thereby improving their livelihoods
          and stimulating economic growth in their communities.
        </p>
      </div>

      <div className={styles.heading}>
        <p>Our Objectives</p>
      </div>
      <div className={styles.content}>
        <p>Cultural Sustenance; Access to Markets; Wealth Creation; Rural Transformation; </p>
      </div>

      <div className={styles.heading}>
        <p>Our Sourcing Locations </p>
      </div>
      <div className={styles.content}>
        <p> Locally sourced raw materials and products from 4 geopolitical zones in Nigeria. Kano, Plateau, Kaduna, Borno, Ogun, </p>
      </div>

      <div className={styles.heading}>
        <p>Our Impact </p>
      </div>
      <div className={styles.content}>
        <p> 00 communities reached
          00 household supported
          SDGs 1, 4, 5, 8 & 17. </p>
      </div>

      <div className={styles.heading}>
        <p>OUR PRODUCTS </p>
      </div>
      <div className={styles.content}>
        <p>Raffia works,
          Leather works,
          Adire clothing,
          Coffee</p>
      </div>

      <div className={styles.heading}>
        <p>RETURNS POLICY</p>
      </div>
      <div className={styles.content}>
        <p>We will happily exchange any item that is unused, unwashed, unaltered, with
          ALL original tags still attached within 3 days of the confirmation of delivery. The
          receipt packaging materials included in your package must be present.
          However, we DO NOT offer exchanges for perishable items or products
          purchased on sale. We do apologize for any inconvenience this may impose,
          but we do not issue refunds or accept returns. No exceptions.</p>
        <p>To begin the exchange process please contact us via email: Ewere@fairmall.ng</p>
        <p>Shipping charges and delivery fees are not reimbursed for exchanged purchases.
          Shipping charges and delivery fees are the customer&apos;s responsibility</p>
      </div>

      <div className={styles.heading}>
        <p>Exchanges</p>
      </div>
      <div className={styles.content}>
        <p>All exchanges must meet the following requirements:<br />
          * Products exchange process must be initiated within 24 hours of receiving order.<br />
          * Products must be unused, unaltered, undamaged, and unwashed.<br />
          * Products must have all tags, accessories, original paperwork and packaging.<br />
          * Items on sale, bulk and custom order items cannot not be returned or exchanged. </p>
        <p>If any items for exchange do not meet these requirements, you will be contacted, the
          items will be returned to you immediately, and a refund will not be issued. We reserve
          the right to refuse an exchange if the items have any signs of wear, alterations, misuse
          or damage. To be clear, we DO NOT offer refunds, only exchanges for different units
          of the same product.</p>
        <p>Please contact our customer service if you have any questions: Ewere@Fairmall.ng</p>
        <p>Please include the following when emailing us for exchanges.<br />
          - Name<br />
          - Phone Number<br />
          - Order Number<br />
          - Picture sample of item(s) being exchanged<br />
          - Reason</p>
      </div>

      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default AboutUs;
