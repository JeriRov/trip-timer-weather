import { Trip } from "../../api/trip/trip.types";
import { MOCK_CITIES } from "../../constants/cities";

export const DEBOUNCE_DELAY = 500;
export const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    city: MOCK_CITIES[0],
    startDate: new Date(),
    endDate: new Date(Date.now() + 518400000),
  },
  {
    id: "2",
    city: MOCK_CITIES[1],
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now() + 1296000000),
  },
  {
    id: "3",
    city: MOCK_CITIES[2],
    startDate: new Date(Date.now()),
    endDate: new Date(Date.now() + 777600000),
  },
];
