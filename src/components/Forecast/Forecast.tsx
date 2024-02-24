import "./forecast.styles.css";

import React, { useEffect, useState } from "react";

import { ForecastItem } from "components/ForecastItem/ForecastItem";

import { getForecastByTimeline } from "api/forecast/forecast";
import { useAppSelector } from "app/redux/hooks";
import { RootState } from "app/redux/store";
import { useToast } from "context/ToastContext/ToastContext";

import { ForecastType } from "api/forecast/forecast.types";

export function Forecast() {
  const { currentTrip } = useAppSelector((state: RootState) => state.trip);
  const [forecast, setForecast] = useState<ForecastType | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchForecast = async () => {
      if (!currentTrip) return;
      try {
        const fetchedForecast = await getForecastByTimeline(
          currentTrip.city.name,
          new Date(currentTrip.startDate),
          new Date(currentTrip.endDate)
        );

        setForecast(fetchedForecast);
      } catch (error) {
        toast("Error fetching forecast!", "error");
      }
    };

    fetchForecast();
  }, [currentTrip, toast]);

  return (
    <div className="forecast__container">
      {currentTrip ? (
        forecast?.days.map(day => {
          return <ForecastItem key={day.datetime} day={day} />;
        })
      ) : (
        <div className="forecast__no-trip-text">No trip selected</div>
      )}
    </div>
  );
}
