export type ForecastPerDayType = {
  tempmax: number;
  tempmin: number;
  temp: number;
  datetime: string;
  icon: string;
};

export type ForecastByTimelineType = {
  days: ForecastPerDayType[];
  address: string;
  tzoffset: number;
};
