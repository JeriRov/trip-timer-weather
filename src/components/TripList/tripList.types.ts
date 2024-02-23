import { Trip } from "api/trip/trip.types";

export type TripListProps = {
  trips: Trip[];
  onTripClick?: (trip: Trip) => void;
  onAddTripClick?: () => void;
  selectedTrip?: Trip | null;
};
