import "./TripItem.css";

import { FC } from "react";

import { TripItemProps } from "../../components/TripItem/tripItem.types";
export const TripItem: FC<TripItemProps> = ({ trip, onClick: handleClick }) => {
  return (
    <div className={"trip-item-container"} key={trip.id}>
      <img src={trip.image} alt={trip.name} />
      <button
        type={"button"}
        className="trip-info-container"
        onClick={() => handleClick && handleClick(trip)}
      >
        <span className="trip-title">{trip.name}</span>
        <span className="trip-date">
          {`${trip.startDate.toLocaleDateString()} - ${trip.endDate.toLocaleDateString()}`}
        </span>
      </button>
    </div>
  );
};
