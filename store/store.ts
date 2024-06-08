import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { apiMiddleware, connectionAPI } from "@/store/api/index";
import { setupListeners } from "@reduxjs/toolkit/query";

const makeStore = () =>
  configureStore({
    reducer: {
      [connectionAPI.reducerPath]: connectionAPI.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiMiddleware),
  });

setupListeners(makeStore().dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
