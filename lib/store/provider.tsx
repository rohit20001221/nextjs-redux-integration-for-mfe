"use client";

import { FC, PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from ".";

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider
      store={(window as any).___MFE_HOST_REDUX_SHARED_STORE___ || createStore()}
    >
      {children}
    </ReduxProvider>
  );
};
