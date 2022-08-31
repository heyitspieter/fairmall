import Head from "next/head";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import Sidedrawer from "src/containers/Sidedrawer/Sidedrawer";
import MobileSearch from "src/containers/MobileSearch/MobileSearch";
import ActivityIndicator from "src/components/ActivityIndicator/ActivityIndicator";

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
        <MobileSearch />
        {children}
        <Footer />
      </div>
      {/* <ActivityIndicator /> */}
    </>
  );
}

export default BaseLayout;
