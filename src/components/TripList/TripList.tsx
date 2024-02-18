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
        <TripItem trip={trip} onClick={handleTripClick} />
      ))}
      <button
        type={"button"}
        className="trip-add-button"
        onClick={handleAddTripClick}
      >
        <span className="trip-add-button-plus"> + </span>
        <span> Add trip </span>
      </button>
    </div>
  );
};
