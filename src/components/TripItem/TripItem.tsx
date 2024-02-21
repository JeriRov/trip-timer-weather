import "./tripItem.styles.css";

import { TripItemProps } from "./tripItem.types";

export function TripItem({
  trip,
  onClick: handleClick,
}: Readonly<TripItemProps>) {
  return (
    <button
      onClick={() => handleClick && handleClick(trip)}
      type="button"
      className="trip-item__container"
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
}
