import "./tripList.styles.css";
import React from "react";

import { TripItem } from "components/TripItem/TripItem";
import { TripListProps } from "components/TripList/tripList.types";

export function TripList({
  trips,
  onTripClick: handleTripClick,
  onAddTripClick: handleAddTripClick,
}: Readonly<TripListProps>) {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <TripItem key={trip.id} onClick={handleTripClick} trip={trip} />
      ))}
      <button
        className="trip-list__add-button"
        onClick={handleAddTripClick}
        type="button"
      >
        <span className="trip-list__add-button-icon"> + </span>
        <span> Add trip </span>
      </button>
    </div>
  );
}
