import "./WeatherSidebar.css";

import { differenceInMilliseconds, format } from "date-fns";
import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";

import { getCurrentWeatherForecast } from "../../api/forecast/forecast";
import { ForecastType } from "../../api/forecast/forecast.types";
import { Loader } from "../../components/Loader/Loader";
import { FORMAT } from "../../constants/formats";
import { useAppSelector } from "../../redux/hooks";
import { INITIAL_COUNTDOWN, MILLISECONDS } from "./weatherSidebar.config";
import { CountdownType, SidebarProps } from "./weatherSidebar.types";

export const WeatherSidebar: FC<PropsWithChildren<SidebarProps>> = ({
  isActive,
  children,
}) => {
  const { currentTrip } = useAppSelector(state => state.trip);
  const [currentWeather, setCurrentWeather] = useState<ForecastType>();
  const [countdown, setCountdown] = useState<CountdownType>(INITIAL_COUNTDOWN);
  const [isLoading, setIsLoading] = useState(true);
  const fetchWeatherData = async () => {
    setIsLoading(true);
    try {
      const cityName = currentTrip ? currentTrip.city.name : "";
      const currentWeatherFetch = await getCurrentWeatherForecast(cityName);
      setCurrentWeather(currentWeatherFetch);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const updateCountdown = () => {
    if (!currentTrip) return;
    const startDate = new Date(currentTrip.startDate);
    const difference = differenceInMilliseconds(startDate, new Date());

    if (difference > 0) {
      const days = Math.floor(difference / MILLISECONDS.DAY);
      const hours = Math.floor(
        (difference % MILLISECONDS.DAY) / MILLISECONDS.HOUR
      );
      const minutes = Math.floor(
        (difference % MILLISECONDS.HOUR) / MILLISECONDS.MINUTE
      );
      const seconds = Math.floor(
        (difference % MILLISECONDS.MINUTE) / MILLISECONDS.SECOND
      );
      setCountdown({ days, hours, minutes, seconds, started: false });
    } else {
      setCountdown(INITIAL_COUNTDOWN);
    }
  };

  useEffect(() => {
    if (currentTrip) {
      fetchWeatherData();
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [currentTrip]);

  return (
    <Fragment>
      <div className={`sidebar__main-content ${isActive ? "shifted" : ""}`}>
        {children}
      </div>

      <div className={`sidebar ${isActive ? "open" : ""}`}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={`sidebar__container ${isLoading ? "loading" : ""}`}>
            <div className="sidebar__weather-container">
              <span>
                {format(
                  new Date(currentWeather?.days[0].datetime ?? ""),
                  FORMAT.DAY_OF_WEEK
                )}
              </span>
              <div className="sidebar__weather">
                <div className="sidebar__temperature">
                  <img
                    loading="lazy"
                    src={`/assets/forecast/${currentWeather?.days[0].icon}.svg`}
                    alt="Weather icon"
                  />
                  <span>{Math.round(currentWeather?.days[0].temp ?? 0)}</span>
                  <div className="sidebar__weather-degrees-symbol">°C</div>
                </div>
              </div>
              <span className="sidebar__city">{currentTrip?.city.name}</span>
            </div>
            {!countdown.started ? (
              <h2 className="sidebar__countdown">
                <div>
                  {countdown.days} <span>DAYS</span>
                </div>
                <div>
                  {countdown.hours} <span>HOURS</span>
                </div>
                <div>
                  {countdown.minutes} <span>MINUTES</span>
                </div>
                <div>
                  {countdown.seconds} <span>SECONDS</span>
                </div>
              </h2>
            ) : (
              <div className="sidebar__trip-message">
                Trip has already started
              </div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};
