import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Sidebar from "../features/sidebar/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Sidebar></Sidebar>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
