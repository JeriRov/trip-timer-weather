import "./tripItem.styles.css";

import { TripItemProps } from "components/TripItem/tripItem.types";
import { formatTripItemDate } from "components/TripItem/tripItem.utils";

export function TripItem({
  trip,
  onClick,
  className,
}: Readonly<TripItemProps>) {
  const handleClick = () => onClick && onClick(trip);

  return (
    <button
      key={trip.id}
      className={`trip-item__container ${className}`}
      onClick={handleClick}
      type="button"
    >
      <img alt={trip.city.name} src={trip.city.image} />
      <div className="trip-item__info-container">
        <span className="trip-item__title">{trip.city.name}</span>
        <span className="trip-item__date">
          {`${formatTripItemDate(trip.startDate)} - ${formatTripItemDate(trip.endDate)}`}
        </span>
      </div>
    </button>
  );
}
