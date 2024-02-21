import "./forecast.styles.css";

import React, { useEffect, useState } from "react";

import { getForecastByTimeline } from "../../api/forecast/forecast";
import { ForecastType } from "../../api/forecast/forecast.types";
import { ForecastItem } from "../ForecastItem/ForecastItem";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export function Forecast() {
  const { currentTrip } = useAppSelector((state: RootState) => state.trip);
  const [forecast, setForecast] = useState<ForecastType | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      if (!currentTrip) return;
      try {
        const fetchedForecast = await getForecastByTimeline(
          currentTrip.city.name,
          currentTrip.startDate,
          currentTrip.endDate
        );
        setForecast(fetchedForecast);
      } catch (error) {
        console.error("Error fetching forecast:", error);
      }
    };
    fetchForecast();
  }, [currentTrip]);

  return (
    <div className="forecast__container">
      {currentTrip ? (
        forecast?.days.map(day => {
          return <ForecastItem key={day.datetime} day={day} />;
        })
      ) : (
        <div>No trip selected</div>
      )}
    </div>
  );
}
