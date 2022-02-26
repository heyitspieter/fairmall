import Image from "next/image";

import styles from "src/components/Orders/Orders.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Orders() {
  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.heading}>
        <p>Orders</p>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Order No.</th>
              <th>Order Confirmed</th>
              <th>Order Delivered</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className={styles.orderNo}>
                  <p>#12F78GQ</p>
                </div>
              </td>
              <td>25th December, 2021</td>
              <td>28th December, 2021</td>
              <td>
                <div className={styles.action}>
                  <button>View</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <div className={styles.orderNo}>
                  <p>#12F78GQ</p>
                </div>
              </td>
              <td>25th December, 2021</td>
              <td>
                <div className={styles.orderStatus}>
                  <button>Pending</button>
                </div>
              </td>
              <td>
                <div className={styles.action}>
                  <button>View</button>
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
  );
}

export default Orders;
