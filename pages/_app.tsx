import { AppProps } from "next/app";
import React from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "@/store/store";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default App;
