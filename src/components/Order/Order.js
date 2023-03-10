import Image from "next/image";
import Svg from "src/components/Svg/Svg";

import styles from "src/components/Order/Order.module.scss";
import { spiralLeft, spiralRight } from "styles/modules/Ui.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { getOrder } from "src/store/slices/orders";
import formatToCurrency from "src/helpers/formatAmount";
import moment from "moment";
import { toast } from "react-toastify";

function Order() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  console.log("id ====", id);

  useEffect(() => {
    if (id) {
      dispatch(getOrder(id));
      // .then(res => console.log(res))
      // .catch(err => toast.error(err.message))
    } else {
      router.push("/orders");
    }
  }, [dispatch, id, router]);

  useCallback(() => {
    if (id) {
      dispatch(getOrder(id));
      // .then(res => console.log(res))
      // .catch(err => toast.error(err.message))
    } else {
      router.push("/orders");
    }
  }, [dispatch, id, router]);
  const { data } = useSelector((state) => state.orders);

  if (data) {
    console.log("data===", data);
  }

  return (
    <div className={styles.container}>
      <div className={spiralLeft}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
      <div className={styles.heading}>
        <p>Orders</p>
      </div>
      <div className={styles.info}>
        <div className={styles.barcode}>
          <Image
            src="/images/barcode.png"
            objectFit="cover"
            layout="fill"
            alt="barcode"
          />
        </div>
        <div>
          <p>
            Order No: <span>{data?.order_id}</span>
          </p>
          <p>
            Order Confirmed:{" "}
            <span>
              {moment(data?.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </span>
          </p>
          <p>
            Order Delivered: <span>-</span>
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__col}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Quantity</th>
                {/* <th>Price</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!!data.products &&
                data.products.map((product, index) => {
                  const img = product.image;

                  return (
                    <tr key={index}>
                      <td>
                        <figure>
                          {/* removed loader property & added path to domains list in next config file */}
                          <Image
                            src={product?.image}
                            objectFit="cover"
                            layout="fill"
                            alt="Product"
                          />
                        </figure>
                      </td>
                      <td>
                        <div className={styles.desc}>
                          <h4>{product?.name}</h4>
                        </div>
                      </td>
                      <td>{product?.quantity}</td>
                      <td>
                        <div className={styles.action}>
                          <button>Give Review</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={styles.grid__col}>
          <h3>Order Summary</h3>
          <div className={styles.summary}>
            <div className={styles.summary__item}>
              <h4>Items ({data?.products?.length})</h4>
            </div>
            <div className={styles.summary__item}>
              <h4>Delivery</h4>
              <p>{formatToCurrency(data.shipping_cost)} </p>
            </div>
            <div className={styles.summary__item}>
              <h4>Taxes</h4>
              <p>{formatToCurrency(data.tax) || "-"}</p>
            </div>
            <div className={styles.summary__item}>
              <h4>Total</h4>
              <p>{formatToCurrency(data.total)} </p>
            </div>
          </div>
        </div>
      </div>
      <div className={spiralRight}>
        <Image src="/svgs/spiral.svg" width={361} height={364} alt="Spiral" />
      </div>
    </div>
  );
}

export default Order;
