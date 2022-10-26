import store from "../redux/store";
import { Provider } from "react-redux";
import { ActiveNavContextProvider } from "../context/ActiveNavContext";
import GlobalLayout from "../components/globalLayout";
import { StoreProvider } from "../utils/Store";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/cart.slice';
import { wrapper } from '../redux/store';
import { getStorageData } from '../utils/useLocalStorage';
import { OpenModalContextProvider } from "../context/OpenModalContext";
function MyApp({ Component, pageProps }) {



  return (
    <>
      <GlobalLayout>
        <ActiveNavContextProvider>
          <OpenModalContextProvider>
            <Component {...pageProps} />
          </OpenModalContextProvider>
        </ActiveNavContextProvider>
      </GlobalLayout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
