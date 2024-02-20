import "./Main.css";

import React, { ChangeEvent, useState } from "react";

import { Trip } from "../../api/trip/trip.types";
import { AddTripModal } from "../../components/AddTripModal/AddTripModal";
import { Container } from "../../components/Container/Container";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { Forecast } from "../../components/Forecast/Forecast";
import { SearchIcon } from "../../components/Icons/SearchIcon";
import { TripList } from "../../components/TripList/TripList";
import { setTrip } from "../../redux/features/trip/tripSlice";
import { useAppDispatch } from "../../redux/hooks";
import { MOCK_TRIPS } from "./main.config";

export const Main = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState<Trip[]>(MOCK_TRIPS);
  const [showModal, setShowModal] = useState(false);

  const handleAddTripClick = (trip: Trip) => {
    setTrips(prevState => [...prevState, trip]);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleTripClick = (trip: Trip) => {
    dispatch(setTrip(trip));
    console.log("Trip clicked", trip);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrips = trips.filter(trip =>
    trip.city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <h1>
        <span className={"font-normal"}>Weather</span> Forecast
      </h1>
      <CustomInput
        className="trip-search"
        placeholder="Search your trip"
        icon={<SearchIcon />}
        onChange={handleSearchInputChange}
      />
      {showModal && (
        <AddTripModal
          show={showModal}
          onClose={handleModalClose}
          onTripAdd={handleAddTripClick}
        />
      )}
      <TripList
        trips={filteredTrips}
        onTripClick={handleTripClick}
        onAddTripClick={handleModalOpen}
      />
      <h2 className={"font-normal"}>Week</h2>
      <Forecast />
    </Container>
  );
};
