import axios, { AxiosInstance } from "axios";
const WEATHER_TIMELINE_API_URL = process.env.REACT_APP_WEATHER_TIMELINE_API_URL;
export const weatherAPI: AxiosInstance = axios.create({
  baseURL: WEATHER_TIMELINE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
