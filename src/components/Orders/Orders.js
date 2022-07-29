import Image from "next/image";
import { useRouter } from "next/router";

import styles from "src/components/Orders/Orders.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";

function Orders({ orders }) {
  const router = useRouter();
  console.log("====================================");
  console.log(orders);
  console.log("====================================");

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
            {orders?.length > 0 &&
              orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className={styles.orderNo}>
                      <p>{order?.order_id}</p>
                    </div>
                  </td>
                  <td>{order?.createdAt}</td>
                  <td>
                    <div className={styles.orderStatus}>
                      <button>{order?.status}</button>
                    </div>
                  </td>
                  <td>
                    <div className={styles.action}>
                      <button onClick={() => router.push("/order/12F78GQ")}>View</button>
                    </div>
                  </td>
                </tr>
              ))}
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
