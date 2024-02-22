import "./tripItem.styles.css";
import { TripItemProps } from "components/TripItem/tripItem.types";

export function TripItem({ trip, onClick }: Readonly<TripItemProps>) {
  const handleClick = () => onClick && onClick(trip);

  return (
    <button
      key={trip.id}
      className="trip-item__container"
      onClick={handleClick}
      type="button"
    >
      <img alt={trip.city.name} src={trip.city.image} />
      <div className="trip-item_info-container">
        <span className="trip-item_title">{trip.city.name}</span>
        <span className="trip-item_date">
          {`${trip.startDate.toLocaleDateString()} - ${trip.endDate.toLocaleDateString()}`}
        </span>
      </div>
    </button>
  );
}
