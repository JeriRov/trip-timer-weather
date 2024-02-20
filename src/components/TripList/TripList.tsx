import "./TripList.css";

import { FC } from "react";

import { TripItem } from "../../components/TripItem/TripItem";
import { TripListProps } from "./tripList.types";

export const TripList: FC<TripListProps> = ({
  trips,
  onTripClick: handleTripClick,
  onAddTripClick: handleAddTripClick,
}) => {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <TripItem key={trip.id} trip={trip} onClick={handleTripClick} />
      ))}
      <button
        type={"button"}
        className="trip-list__add-button"
        onClick={handleAddTripClick}
      >
        <span className="trip-list__add-button-icon"> + </span>
        <span> Add trip </span>
      </button>
    </div>
  );
};
