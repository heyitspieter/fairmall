/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import styles from "src/components/AboutUs/AboutUs.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <div className={spiralLeft}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
        <div className={styles.grid__section_1}>
          <div className={styles.item}>
            <figure className={styles.item__image_1}>
              <Image
                alt="image 1"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_1.png"
              />
              <figure>
                <img
                  src="images/bullet_1.png"
                  alt="bullet"
                  width={65}
                  height={60}
                />
              </figure>
            </figure>
            <figure className={styles.item__image_2}>
              <Image
                alt="image 1"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_2.png"
              />
              <figure>
                <img
                  src="images/bullet_2.png"
                  alt="bullet"
                  width={65}
                  height={60}
                />
              </figure>
            </figure>
            <figure className={styles.item__image_3}>
              <Image
                alt="image 1"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_5.png"
              />
              <figure>
                <img
                  src="images/bullet_5.png"
                  alt="bullet"
                  width={65}
                  height={60}
                />
              </figure>
            </figure>
            <figure className={styles.item__image_4}>
              <Image
                alt="image 1"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_3.png"
              />
              <figure>
                <img
                  src="images/bullet_3.png"
                  alt="bullet"
                  width={65}
                  height={60}
                />
              </figure>
            </figure>
            <figure className={styles.item__image_5}>
              <Image
                alt="image 1"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_4.png"
              />
              <figure>
                <img
                  src="images/bullet_5.png"
                  alt="bullet"
                  width={65}
                  height={60}
                />
              </figure>
            </figure>
          </div>
          <div className={styles.item}>
            <div className={styles.item__logo}>
              <div className={styles.emblem}>
                <div>
                  <Image
                    src="/logo.svg"
                    width={72}
                    height={72}
                    alt="Fairmall"
                  />
                </div>
                <span>
                  fair<span>mall</span>
                </span>
              </div>
            </div>
            <div className={styles.subheading}>
              <h3>About Us</h3>
            </div>
            <div className={styles.p__text}>
              <p>
                Fair Mall is a source aggregator which connects producers of
                indigenous Nigerian commodities with premium markets and
                opportunities, enabled by trade. Our goal is to help individuals
                and businesses easily discover quality locally-produced goods
                while providing indigenous producers with access to a wider
                customer network and business support, all at a fair rate for
                producers and consumers. We ensure that producers receive
                premium value for their wares thereby improving their
                livelihoods and stimulating economic growth in their
                communities.
              </p>
            </div>
            <div className={styles.accolades}>
              <div className={styles.accolades__item}>
                <p>200+</p>
                <p>Community reaches</p>
              </div>
              <div className={styles.accolades__item}>
                <p>100+</p>
                <p>100 households support sdgs 1, 4, 5, 8 & 17</p>
              </div>
            </div>
          </div>
        </div>
        <div className={spiralRight}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.grid__section_2}>
          <div className={styles.item}>
            <div className={styles.subheading}>
              <h3>Our Objectives</h3>
            </div>
            <div className={styles.list}>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Cultural Sustenance</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Access to markets</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Wealth Creation</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Rural transformation</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <figure className={styles.item__image_1}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_6.png"
              />
            </figure>
            <figure className={styles.item__image_2}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_7.png"
              />
            </figure>
            <figure className={styles.item__image_3}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_8.png"
              />
            </figure>
            <figure className={styles.item__image_4}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_9.png"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.grid__section_3}>
          <div className={styles.item}>
            <div className={styles.subheading}>
              <h3>Sourcing Locations</h3>
              <p>Locally sourced raw materials and products</p>
            </div>
            <div className={styles.list}>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Kano</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Plateau</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Kaduna</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Borno</p>
              </div>
              <div className={styles.list__item}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.svg"
                    width={28}
                    height={28}
                    alt="Fairmall"
                  />
                </div>
                <p>Ogun</p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <figure className={styles.item__image_1}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_10.png"
              />
            </figure>
            <figure className={styles.item__image_2}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_11.png"
              />
            </figure>
            <figure className={styles.item__image_3}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_12.png"
              />
            </figure>
            <figure className={styles.item__image_4}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_13.png"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.grid__section_4}>
          <div className={styles.item}>
            <div className={styles.subheading}>
              <h3>Returns Policy</h3>
            </div>
            <div className={styles.info}>
              <p>
                We will happily exchange any item that is unused, unwashed,
                unaltered, with ALL original tags still attached within 3 days
                of the confirmation of delivery. The receipt packaging materials
                included in your package must be present. However, we DO NOT
                offer exchanges for perishable items or products purchased on
                sale. We do apologize for any inconvenience this may impose, but
                we do not issue refunds or accept returns. No exceptions.
              </p>
              <p>
                To begin the exchange process please contact us via email:{" "}
                <a href="mailto:ewere@fairmall.ng">ewere@fairmall.ng</a>
              </p>
              <p>
                Shipping charges and delivery fees are not reimbursed for
                exchanged purchases. Shipping charges and delivery fees are the
                customer&apos;s responsibility.
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <figure className={styles.item__image_1}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_10.png"
              />
            </figure>
            <figure className={styles.item__image_2}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_11.png"
              />
            </figure>
            <figure className={styles.item__image_3}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_12.png"
              />
            </figure>
            <figure className={styles.item__image_4}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_13.png"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.grid__section_5}>
          <div className={styles.item}>
            <div className={styles.subheading}>
              <h3>Exchanges</h3>
            </div>
            <div className={styles.info}>
              <p>All exchanges must meet the following requirements:</p>
              <ol>
                <li>
                  Products exchange process must be initiated within 24 hours of
                  receiving order.
                </li>
                <li>
                  Products must be unused, unaltered, undamaged, and unwashed.
                </li>
                <li>
                  Products must have all tags, accessories, original paperwork
                  and packaging.
                </li>
                <li>
                  Items on sale, bulk and custom order items cannot not be
                  returned or exchanged.
                </li>
              </ol>
              <p>
                If any items for exchange do not meet these requirements, you
                will be contacted, the items will be returned to you
                immediately, and a refund will not be issued. We reserve the
                right to refuse an exchange if the items have any signs of wear,
                alterations, misuse or damage. To be clear, we DO NOT offer
                refunds, only exchanges for different units of the same product.
              </p>
              <p>
                Please contact our customer service if you have any questions:{" "}
                {""}
                <a href="mailto:ewere@fairmall.ng">ewere@fairmall.ng</a>
              </p>
              <p>
                Please include the following when emailing us for exchanges:
              </p>
              <ol>
                <li>Name</li>
                <li>Phone number</li>
                <li>Phone number</li>
                <li>Order number</li>
                <li>Picture sample of item(s) being exchanged</li>
                <li>Reason</li>
              </ol>
            </div>
          </div>
          <div className={styles.item}>
            <figure className={styles.item__image_1}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_10.png"
              />
            </figure>
            <figure className={styles.item__image_2}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_11.png"
              />
            </figure>
            <figure className={styles.item__image_3}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_12.png"
              />
            </figure>
            <figure className={styles.item__image_4}>
              <Image
                alt="image 6"
                layout="fill"
                quality={100}
                objectFit="cover"
                src="/images/aboutImg_13.png"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
