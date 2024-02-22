import "./addTripModal.styles.css";

import React, { useState } from "react";

import { MAX_DATE } from "components/AddTripModal/addTripModal.config";
import { AddTripModalProps } from "components/AddTripModal/addTripModal.types";
import { CustomButton } from "components/CustomButton/CustomButton";
import { CustomDatePicker } from "components/CustomDatePicker/CustomDatePicker";
import { CloseIcon } from "components/Icons/CloseIcon";
import { Selector } from "components/Selector/Selector";

import { MOCK_CITIES } from "constants/cities";

import { useToast } from "context/ToastContext/ToastContext";

import { City } from "api/trip/trip.types";

export function AddTripModal({
  show,
  onTripAdd,
  onClose: handleClose,
}: Readonly<AddTripModalProps>) {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const { toast } = useToast();
  const handleStartDateChange = (date: string) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
  };

  const handleDoneClick = () => {
    if (!selectedCity || !startDate || !endDate) {
      toast("Please fill all the fields!", "error");
      return;
    }
    if (startDate > endDate) {
      toast("Start date must be before end date!", "error");
      return;
    }
    onTripAdd({
      id: new Date().getTime().toString(),
      city: selectedCity,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
    setSelectedCity(undefined);
    setStartDate("");
    setEndDate("");
    handleClose();
  };

  const handleSelectItem = (city: City) => {
    setSelectedCity(city);
  };

  const handleVisibleItem = (city: City) => {
    return city.name;
  };

  return (
    <div className={`weather-modal ${show ? "show" : ""}`}>
      <div className="weather-modal__body">
        <div className="weather-modal__header">
          <h2 className="weather-modal__header-title">Create trip</h2>
          <button
            className="weather-modal__close"
            onClick={handleClose}
            type="button"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="weather-modal__content">
          <form
            autoComplete="off"
            className="weather-modal__form weather-modal__label-text"
          >
            <p>
              <span>*</span> City
            </p>
            <Selector<City>
              className="weather-modal__selector"
              getKey={(city: City) => city.name}
              items={MOCK_CITIES}
              name="city-selector"
              onSelectItem={handleSelectItem}
              onVisibleItem={handleVisibleItem}
              placeholder="Please select a city"
              renderItem={(city: City) => <div>{city.name}</div>}
            />
            <p>
              <span>*</span> Start date
            </p>
            <CustomDatePicker
              className="weather-modal__datepicker"
              maxDate={MAX_DATE}
              minDate={new Date()}
              name="start-datepicker"
              onSelectDate={handleStartDateChange}
              placeholder="Please select a start date"
              value={startDate}
            />
            <p>
              <span>*</span> End date
            </p>
            <CustomDatePicker
              className="weather-modal__datepicker"
              maxDate={MAX_DATE}
              minDate={new Date()}
              name="end-datepicker"
              onSelectDate={handleEndDateChange}
              placeholder="Please select an end date"
              value={endDate}
            />
          </form>
        </div>
        <div className="weather-modal__footer">
          <div className="weather-modal__button-container">
            <CustomButton onClick={handleClose} variant="outlined">
              Cancel
            </CustomButton>
            <CustomButton onClick={handleDoneClick}>Save</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
