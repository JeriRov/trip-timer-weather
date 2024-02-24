import { TripStateTypes } from "features/trip/tripSlice.types";

export const TRIP_SLICE_NAME = "trip";
export const tripInitialState: TripStateTypes = {
  currentTrip: null,
};
