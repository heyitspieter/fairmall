import SidedrawerProvider from "src/context/SidedrawerContext";
import { Provider } from "react-redux";
import "styles/global.scss";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <SidedrawerProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SidedrawerProvider>
  );
}

export default MyApp;
