import "./Main.css";

import React, { ChangeEvent, useState } from "react";

import { Trip } from "../../api/trip/trip.types";
import { AddTripModal } from "../../components/AddTripModal/AddTripModal";
import { Container } from "../../components/Container/Container";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { Forecast } from "../../components/Forecast/Forecast";
import { SearchIcon } from "../../components/Icons/SearchIcon";
import { TripList } from "../../components/TripList/TripList";
import { WeatherSidebar } from "../../components/WeatherSidebar/WeatherSidebar";
import { useDebounce } from "../../hooks/useDebounce";
import { setTrip } from "../../redux/features/trip/tripSlice";
import { useAppDispatch } from "../../redux/hooks";
import { DEBOUNCE_DELAY, MOCK_TRIPS } from "./main.config";

export const Main = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState<Trip[]>(MOCK_TRIPS);
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null);

  const debouncedHandleAddTripClick = useDebounce<Trip>((trip: Trip) => {
    setTrips(prevState => [...prevState, trip]);
  }, DEBOUNCE_DELAY);

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const debouncedHandleTripClick = useDebounce<Trip>((trip: Trip) => {
    dispatch(setTrip(trip));
  }, DEBOUNCE_DELAY);

  const handleTripClick = (trip: Trip) => {
    if (activeTrip && activeTrip.id === trip.id) {
      setIsActive(false);
      setActiveTrip(null);
    } else {
      setIsActive(true);
      setActiveTrip(trip);
    }
    debouncedHandleTripClick(trip);
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrips = trips.filter(trip =>
    trip.city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <WeatherSidebar
        isActive={isActive}
        toggleSidebar={() => setIsActive(!isActive)}
      >
        <div className="main__content">
          <h1>
            <span className={"font-normal"}>Weather</span> Forecast
          </h1>
          <CustomInput
            className="trip-search"
            placeholder="Search your trip"
            icon={<SearchIcon />}
            onChange={handleSearchInputChange}
          />
          <AddTripModal
            show={showModal}
            onClose={handleModalClose}
            onTripAdd={debouncedHandleAddTripClick}
          />
          <TripList
            trips={filteredTrips}
            onTripClick={handleTripClick}
            onAddTripClick={handleModalOpen}
          />
          <h2 className={"font-normal"}>Forecast</h2>
          <Forecast />
        </div>
      </WeatherSidebar>
    </Container>
  );
};
