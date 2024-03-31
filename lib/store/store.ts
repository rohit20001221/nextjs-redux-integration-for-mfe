"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "./slices/counterSlice";

export type RootState = {
  counter: CounterState;
};

export const createStore = () => {
  console.log("[x] CREATING STORE");

  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

  // cache the store object so that its not re-created
  (window as any).___MFE_HOST_REDUX_SHARED_STORE___ = store;

  return store;
};

type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store["dispatch"];
