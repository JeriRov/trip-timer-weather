import { format } from "date-fns";

import { MOCK_CITIES } from "constants/cities";
import { FORMAT } from "constants/formats";

import { Trip } from "api/trip/trip.types";

export const DEBOUNCE_DELAY = 500;
const FIFTEEN_DAYS_IN_MS = 1296000000;
const SEVEN_DAYS_IN_MS = 604800000;
const FOUR_DAYS_IN_MS = 345600000;

export const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    city: MOCK_CITIES[0],
    startDate: format(new Date(), FORMAT.ISO_8601),
    endDate: format(new Date(Date.now() + SEVEN_DAYS_IN_MS), FORMAT.ISO_8601),
  },
  {
    id: "2",
    city: MOCK_CITIES[1],
    startDate: format(new Date(Date.now() + SEVEN_DAYS_IN_MS), FORMAT.ISO_8601),
    endDate: format(new Date(Date.now() + FIFTEEN_DAYS_IN_MS), FORMAT.ISO_8601),
  },
  {
    id: "3",
    city: MOCK_CITIES[2],
    startDate: format(new Date(Date.now()), FORMAT.ISO_8601),
    endDate: format(new Date(Date.now() + FOUR_DAYS_IN_MS), FORMAT.ISO_8601),
  },
];
