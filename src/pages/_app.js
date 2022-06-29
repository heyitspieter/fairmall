import SidedrawerProvider from "src/context/SidedrawerContext";
import { Provider } from "react-redux";
import "styles/global.scss";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <SidedrawerProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SidedrawerProvider>
  );
}

export default MyApp;
