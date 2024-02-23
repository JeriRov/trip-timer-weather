import { MOCK_CITIES } from "constants/cities";

import { Trip } from "api/trip/trip.types";

export const DEBOUNCE_DELAY = 500;
const FIFTEEN_DAYS_IN_MS = 1296000000;
const SEVEN_DAYS_IN_MS = 604800000;
const FOUR_DAYS_IN_MS = 345600000;

export const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    city: MOCK_CITIES[0],
    startDate: new Date().toLocaleDateString(),
    endDate: new Date(Date.now() + SEVEN_DAYS_IN_MS).toLocaleDateString(),
  },
  {
    id: "2",
    city: MOCK_CITIES[1],
    startDate: new Date(Date.now() + SEVEN_DAYS_IN_MS).toLocaleDateString(),
    endDate: new Date(Date.now() + FIFTEEN_DAYS_IN_MS).toLocaleDateString(),
  },
  {
    id: "3",
    city: MOCK_CITIES[2],
    startDate: new Date(Date.now()).toLocaleDateString(),
    endDate: new Date(Date.now() + FOUR_DAYS_IN_MS).toLocaleDateString(),
  },
];
