import { configureStore } from "@reduxjs/toolkit";

import { tripReducer } from "./features/TripSlice/tripSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      trip: tripReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
