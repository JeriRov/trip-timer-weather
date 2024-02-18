import "./Main.css";

import React from "react";

import { Trip } from "../../api/trip/trip.types";
import { Container } from "../../components/Container/Container";
import { TripList } from "../../components/TripList/TripList";
import { setTrip } from "../../redux/features/TripSlice/tripSlice";
import { useAppDispatch } from "../../redux/hooks";
export const Main = () => {
  const trips: Trip[] = [
    {
      id: "1",
      name: "Berlin",
      startDate: new Date(),
      endDate: new Date(Date.now() + 1000),
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Tokyo",
      startDate: new Date(Date.now() + 1500),
      endDate: new Date(Date.now() + 2500),
      image: "https://via.placeholder.com/250",
    },
    {
      id: "3",
      name: "Barcelona",
      startDate: new Date(Date.now() + 3000),
      endDate: new Date(Date.now() + 3500),
      image: "https://via.placeholder.com/350",
    },
  ];

  const dispatch = useAppDispatch();

  const handleAddTripClick = () => {
    // TODO: Implement
  };
  const handleTripClick = (trip: Trip) => {
    dispatch(setTrip(trip));
  };

  return (
    <Container>
      <h1>
        <span className={"font-normal"}>Weather</span> Forecast
      </h1>
      <p>Search</p>
      <TripList
        trips={trips}
        onAddTripClick={handleAddTripClick}
        onTripClick={handleTripClick}
      />
      <h2 className={"font-normal"}>Week</h2>
      <p>Forecast</p>
    </Container>
  );
};
