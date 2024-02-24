import { configureStore } from "@reduxjs/toolkit";

import { tripReducer } from "features/trip/tripSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      trip: tripReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
