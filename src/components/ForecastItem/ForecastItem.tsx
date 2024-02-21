import "./forecastItem.styles.css";

import { format } from "date-fns";
import React from "react";

import { ForecastPerDayType } from "../../api/forecast/forecast.types";

export type ForecastItemProps = {
  day: ForecastPerDayType;
};

export function ForecastItem({ day }: Readonly<ForecastItemProps>) {
  const getWeekday = (date: string) => {
    return format(new Date(date), "EEEE");
  };

  return (
    <div className="forecast-item-container">
      <span className="forecast-item-weekday">{getWeekday(day.datetime)}</span>
      <img
        loading="lazy"
        src={`/assets/forecast/${day.icon}.svg`}
        alt={day.icon}
      />
      <span>
        {Math.round(day.tempmax)}°/{Math.round(day.tempmin)}°
      </span>
    </div>
  );
}
