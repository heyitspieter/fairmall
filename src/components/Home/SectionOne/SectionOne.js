import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Home/Home.module.scss";

function SectionOne({products}) {
  return (
    <section className={styles.section_1}>
      <div className={styles.section_1__grid}>

        {
          products.length>0 ? (
            products.map((product, index) => (
              <>
                <div className={styles.section_1__imgGroup} key={index}>
                  <p>{product.name}</p>
                  <figure>
                    <Image
                      quality="100"
                      layout="fill"
                      objectFit="cover"
                      alt={product.name}
                      src={product.image}
                      loader={() => product.image}
                    />
                  </figure>
                </div>
              </>
            ))
          ) : (
            <>
              <div className={styles.section_1__imgGroup}>
                <p>Sister of Owu</p>
                <figure>
                  <Image
                    quality="100"
                    layout="fill"
                    objectFit="cover"
                    alt="Swahili Decor"
                    src="/images/img-001.png"
                  />
                </figure>
              </div>
              <div className={styles.section_1__imgGroup}>
                <p>Swahili Decor</p>
                <figure>
                  <Image
                    quality="100"
                    layout="fill"
                    objectFit="cover"
                    alt="Swahili Decor"
                    src="/images/img-002.png"
                  />
                </figure>
              </div>
              <div className={styles.section_1__imgGroup}>
                <p>Kunuri Water Gourd</p>
                <figure>
                  <Image
                    quality="100"
                    layout="fill"
                    objectFit="cover"
                    alt="Kunuri Water Gourd"
                    src="/images/img-003.png"
                  />
                </figure>
              </div>
              <div className={styles.section_1__imgGroup}>
                <p>Reddington Armless Chair</p>
                <figure>
                  <Image
                    layout="fill"
                    quality="100"
                    objectFit="cover"
                    src="/images/img-004.png"
                    alt="Reddington Armless Chair"
                  />
                </figure>
              </div>
            </>
          )
        }
        <div className={styles.section_1__heading}>
          <p>Welcome to</p>
          <p>
            fair
            <span>mall</span>
          </p>
        </div>
      </div>
      <div className={styles.section_1__btnScroll}>
        <button>
          <Svg symbol="arrow-down" />
        </button>
      </div>
    </section>
  );
}

export default SectionOne;
