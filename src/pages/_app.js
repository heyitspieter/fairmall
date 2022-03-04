import SidedrawerProvider from "src/context/SidedrawerContext";

import "styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SidedrawerProvider>
      <Component {...pageProps} />
    </SidedrawerProvider>
  );
}

export default MyApp;
