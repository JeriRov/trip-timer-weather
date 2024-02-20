import "./TripItem.css";

import { FC } from "react";

import { TripItemProps } from "../../components/TripItem/tripItem.types";
export const TripItem: FC<TripItemProps> = ({ trip, onClick: handleClick }) => {
  return (
    <button
      onClick={() => handleClick && handleClick(trip)}
      type={"button"}
      className={"trip-item__container"}
      key={trip.id}
    >
      <img src={trip.city.image} alt={trip.city.name} />
      <div className="trip-item_info-container">
        <span className="trip-item_title">{trip.city.name}</span>
        <span className="trip-item_date">
          {`${trip.startDate.toLocaleDateString()} - ${trip.endDate.toLocaleDateString()}`}
        </span>
      </div>
    </button>
  );
};
