import "./tripList.styles.css";

import { TripItem } from "../TripItem/TripItem";
import { TripListProps } from "./tripList.types";

export function TripList({
  trips,
  onTripClick: handleTripClick,
  onAddTripClick: handleAddTripClick,
}: Readonly<TripListProps>) {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <TripItem key={trip.id} trip={trip} onClick={handleTripClick} />
      ))}
      <button
        type="button"
        className="trip-list__add-button"
        onClick={handleAddTripClick}
      >
        <span className="trip-list__add-button-icon"> + </span>
        <span> Add trip </span>
      </button>
    </div>
  );
}
