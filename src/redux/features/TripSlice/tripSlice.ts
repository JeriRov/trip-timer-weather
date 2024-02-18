import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Trip } from "../../../api/trip/trip.types";
import { TRIP_SLICE_NAME, tripInitialState } from "./tripSlice.config";

const tripSlice = createSlice({
  name: TRIP_SLICE_NAME,
  initialState: tripInitialState,
  reducers: {
    setTrip: (state, action: PayloadAction<Trip | null>) => {
      return { ...state, webSocket: action.payload };
    },
  },
});

export const { setTrip } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
