import "pages/Main/main.styles.css";

import React, { ChangeEvent, useEffect, useState } from "react";

import { AddTripModal } from "components/AddTripModal/AddTripModal";
import { Container } from "components/Container/Container";
import { CustomInput } from "components/CustomInput/CustomInput";
import { Forecast } from "components/Forecast/Forecast";
import { Header } from "components/Header/Header";
import { SearchIcon } from "components/Icons/SearchIcon";
import { TripList } from "components/TripList/TripList";
import { WeatherSidebar } from "components/WeatherSidebar/WeatherSidebar";

import { DEBOUNCE_DELAY, MOCK_TRIPS } from "pages/Main/main.config";

import { useAppDispatch } from "app/redux/hooks";
import { setTrip } from "features/trip/tripSlice";
import { useDebounce } from "hooks/useDebounce";

import { Trip } from "api/trip/trip.types";

export function Main() {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeTrip, setActiveTrip] = useState<Trip | null>(null);

  useEffect(() => {
    const storedTripsString = localStorage.getItem("trips");

    if (storedTripsString) {
      const storedTrips: Trip[] = JSON.parse(storedTripsString);

      setTrips(storedTrips);
    } else {
      setTrips(MOCK_TRIPS);
    }
  }, []);

  useEffect(() => {
    if (trips.length > 0) {
      localStorage.setItem("trips", JSON.stringify(trips));
    }
  }, [trips]);

  const debouncedHandleAddTripClick = useDebounce<Trip>((trip: Trip) => {
    setTrips(prevState => [...prevState, trip]);
  }, DEBOUNCE_DELAY);

  const handleTripAdd = (trip: Trip) => {
    debouncedHandleAddTripClick(trip);
  };

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

  const filteredTrips = trips
    .filter(trip =>
      trip.city.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

  return (
    <Container>
      <Header />
      <WeatherSidebar
        isActive={isActive}
        toggleSidebar={() => setIsActive(!isActive)}
      >
        <div className="main__content">
          <CustomInput
            className="main__trip-search"
            icon={<SearchIcon />}
            onChange={handleSearchInputChange}
            placeholder="Search your trip"
          />
          <AddTripModal
            onClose={handleModalClose}
            onTripAdd={handleTripAdd}
            show={showModal}
          />
          <TripList
            onAddTripClick={handleModalOpen}
            onTripClick={handleTripClick}
            selectedTrip={activeTrip}
            trips={filteredTrips}
          />
          <h2 className="main__font-normal">Forecast</h2>
          <Forecast />
        </div>
      </WeatherSidebar>
    </Container>
  );
}
