import { useSelector } from "react-redux";

import styles from "src/components/ActivityIndicator/ActivityIndicator.module.scss";

function ActivityIndicator() {
  const spinner = useSelector((state) => state.spinner);

  if (!spinner.visibility) return null;

  return (
    <div className={styles.overlay}>
      <p>{spinner.text || spinner.message}</p>
      <div className={styles.backdrop}></div>
      <div className={styles.spinner}></div>
      <style global jsx>
        {`
          body {
            overflow: ${spinner.visibility ? `hidden` : `auto`}!important;
          }
        `}
      </style>
    </div>
  );
}

export default ActivityIndicator;
