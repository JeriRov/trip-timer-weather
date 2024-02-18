import { format } from "date-fns";

import { weatherAPI } from "../index";
import { ForecastByTimelineType } from "./forecast.types";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DATE_FORMAT = "yyyy-MM-dd";
export const getForecastByTimeline = async (
  location: string,
  startDate: Date,
  endDate: Date
) => {
  const formattedStartDate = format(startDate, DATE_FORMAT);
  const formattedEndDate = format(endDate, DATE_FORMAT);
  console.log(
    "request: ",
    location,
    formattedStartDate,
    formattedEndDate,
    weatherAPI
  );
  const { data } = await weatherAPI.get<ForecastByTimelineType>(
    `${location}/${formattedStartDate}/${formattedEndDate}?unitGroup=metric&include=days&key=${WEATHER_API_KEY}&contentType=json`
  );

  return data;
};
