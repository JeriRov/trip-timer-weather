import "./Main.css";

import React from "react";

import { Trip } from "../../api/trip/trip.types";
import { Container } from "../../components/Container/Container";
import { Forecast } from "../../components/Forecast/Forecast";
import { TripList } from "../../components/TripList/TripList";
import { setTrip } from "../../redux/features/TripSlice/tripSlice";
import { useAppDispatch } from "../../redux/hooks";
export const Main = () => {
  const trips: Trip[] = [
    {
      id: "1",
      name: "Berlin",
      startDate: new Date(),
      endDate: new Date(Date.now() + 518400000),
      image:
        "https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/",
    },
    {
      id: "2",
      name: "Tokyo",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + 1296000000),
      image:
        "https://lh5.googleusercontent.com/p/AF1QipMV0w12CehAY1fTf0In-z_UEyclc9728MBUhCmq=w594-h343-n-k-no",
    },
    {
      id: "3",
      name: "Barcelona",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now() + 777600000),
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1467072114-656f160a0a37b.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
  ];

  const dispatch = useAppDispatch();

  const handleAddTripClick = () => {
    // TODO: Implement
  };
  const handleTripClick = (trip: Trip) => {
    dispatch(setTrip(trip));
    console.log("Trip clicked", trip);
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
      <Forecast />
    </Container>
  );
};
