import Head from "next/head";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Sidedrawer from "src/containers/Sidedrawer/Sidedrawer";

import styles from "src/components/BaseLayout/BaseLayout.module.scss";

function BaseLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Sidedrawer />
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default BaseLayout;
