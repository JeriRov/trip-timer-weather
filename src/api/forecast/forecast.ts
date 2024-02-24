import { format } from "date-fns";

import { FORMAT } from "constants/formats";

import { weatherAPI } from "api/index";

import { ForecastType } from "./forecast.types";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getForecastByTimeline = async (
  location: string,
  startDate: Date,
  endDate: Date
) => {
  const formattedStartDate = format(startDate, FORMAT.ISO_8601);
  const formattedEndDate = format(endDate, FORMAT.ISO_8601);
  const { data } = await weatherAPI.get<ForecastType>(
    `${location}/${formattedStartDate}/${formattedEndDate}?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`
  );

  return data;
};

export const getCurrentWeatherForecast = async (location: string) => {
  const { data } = await weatherAPI.get<ForecastType>(
    `${location}/today?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`
  );

  return data;
};
