import SidedrawerProvider from "src/context/SidedrawerContext";
import { Provider } from "react-redux";
import "styles/global.scss";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { persistStore } from "redux-persist";
const persistor = persistStore(store);


function MyApp({ Component, pageProps }) {

  return (
    <SidedrawerProvider>
      <ToastContainer position="top-right" closeOnClick />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SidedrawerProvider>
  );
}

export default MyApp;
