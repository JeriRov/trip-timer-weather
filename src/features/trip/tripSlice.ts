import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TRIP_SLICE_NAME, tripInitialState } from "./tripSlice.config";

import { Trip } from "api/trip/trip.types";

const tripSlice = createSlice({
  name: TRIP_SLICE_NAME,
  initialState: tripInitialState,
  reducers: {
    setTrip: (state, action: PayloadAction<Trip | null>) => {
      return { ...state, currentTrip: action.payload };
    },
  },
});

export const { setTrip } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
