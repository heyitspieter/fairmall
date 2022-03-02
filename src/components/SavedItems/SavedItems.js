import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/SavedItems/SavedItems.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import { container } from "src/components/Recommendations/Recommendations.module.scss";

function SavedItems() {
  return (
    <>
      <div className={styles.container}>
        <div className={spiralLeft}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
        <div className={styles.heading}>
          <p>Saved Items</p>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <figure>
                    <Image
                      src="/images/product-thumb.png"
                      objectFit="cover"
                      layout="fill"
                      alt="Product"
                    />
                  </figure>
                </td>
                <td>
                  <div className={styles.desc}>
                    <h4>Keto Hand-made Vase</h4>
                    <p>GH-23451</p>
                  </div>
                </td>
                <td>
                  <div className={styles.rating}>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                  </div>
                </td>
                <td>100,000 NGN</td>
                <td>
                  <div className={styles.action}>
                    <button>
                      <Svg symbol="shopping-basket" />
                    </button>
                    <button>
                      <Svg symbol="bin" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image
                      src="/images/product-thumb.png"
                      objectFit="cover"
                      layout="fill"
                      alt="Product"
                    />
                  </figure>
                </td>
                <td>
                  <div className={styles.desc}>
                    <h4>Keto Hand-made Vase</h4>
                    <p>GH-23451</p>
                  </div>
                </td>
                <td>
                  <div className={styles.rating}>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                    <button>
                      <Svg symbol="star" />
                    </button>
                  </div>
                </td>
                <td>100,000 NGN</td>
                <td>
                  <div className={styles.action}>
                    <button>
                      <Svg symbol="shopping-basket" />
                    </button>
                    <button>
                      <Svg symbol="bin" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={spiralRight}>
          <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
        </div>
      </div>
      <style jsx global>
        {`
          .${container} {
            margin-bottom: 10rem;
          }

          @media screen and (max-width: 50em) {
            .${container} {
              padding-top: 2rem;
              margin-bottom: 5rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default SavedItems;
