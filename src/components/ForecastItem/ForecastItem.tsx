import "./forecastItem.styles.css";

import { format } from "date-fns";
import React from "react";

import { ForecastPerDayType } from "api/forecast/forecast.types";

export type ForecastItemProps = {
  day: ForecastPerDayType;
};

export function ForecastItem({ day }: Readonly<ForecastItemProps>) {
  const getWeekday = (date: string) => {
    return format(new Date(date), "EEEE");
  };

  return (
    <div className="forecast-item__container">
      <span className="forecast-item__weekday">{getWeekday(day.datetime)}</span>
      <img
        alt={day.icon}
        loading="lazy"
        src={`/assets/forecast/${day.icon}.svg`}
      />
      <span>
        {Math.round(day.tempmax)}°/{Math.round(day.tempmin)}°
      </span>
    </div>
  );
}
