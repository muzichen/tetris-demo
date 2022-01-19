import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";
import { getRootReducer } from "./root-reducer";

export const configureAppStore = (preloadedState = {}) => {

  const rootReducer = getRootReducer();

  const store = configureStore({
    devTools: {
      name: 'app',
      maxAge: 100
    },
    preloadedState,
    reducer: rootReducer,
  })

  return store;

}

let appStore: ReturnType<typeof configureAppStore>;

export type AppStore = ReturnType<typeof configureAppStore>;

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispacth = () => useDispatch<AppDispatch>();

export const getAppStore = (state?: AppState) => configureAppStore(state);