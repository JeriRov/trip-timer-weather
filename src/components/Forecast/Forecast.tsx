import "./Forecast.css";

import React, { useEffect, useState } from "react";

import { getForecastByTimeline } from "../../api/forecast/forecast";
import { ForecastByTimelineType } from "../../api/forecast/forecast.types";
import { ForecastItem } from "../../components/ForecastItem/ForecastItem";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

export const Forecast = () => {
  const { currentTrip } = useAppSelector((state: RootState) => state.trip);
  const [forecast, setForecast] = useState<ForecastByTimelineType | null>(null);
  const fetchForecast = async () => {
    if (!currentTrip) return;
    const fetchedForecast = await getForecastByTimeline(
      currentTrip.name,
      currentTrip.startDate,
      currentTrip.endDate
    );
    setForecast(fetchedForecast);
  };

  useEffect(() => {
    fetchForecast();
  }, [currentTrip]);

  return (
    <div className="forecast-container">
      {currentTrip ? (
        forecast?.days.map(day => {
          return <ForecastItem day={day} />;
        })
      ) : (
        <div>No trip selected</div>
      )}
    </div>
  );
};
