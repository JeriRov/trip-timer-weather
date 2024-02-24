import { Trip } from "api/trip/trip.types";

export type TripItemProps = {
  trip: Trip;
  onClick?: (trip: Trip) => void;
  className?: string;
};
