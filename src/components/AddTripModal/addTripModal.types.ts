import { Trip } from "api/trip/trip.types";

export type AddTripModalProps = {
  show: boolean;
  onTripAdd: (trip: Trip) => void;
  onClose: () => void;
};
