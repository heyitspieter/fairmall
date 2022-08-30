import store from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SkeletonTheme } from "react-loading-skeleton";
import { PersistGate } from "redux-persist/integration/react";
import SidedrawerProvider from "src/context/SidedrawerContext";

import "react-loading-skeleton/dist/skeleton.css";
import "styles/global.scss";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <SidedrawerProvider>
      <ToastContainer position="top-right" closeOnClick />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SkeletonTheme borderRadius="0.5rem">
            <Component {...pageProps} />
          </SkeletonTheme>
        </PersistGate>
      </Provider>
    </SidedrawerProvider>
  );
}

export default MyApp;