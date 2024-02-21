import "./addTripModal.styles.css";

import React, { useState } from "react";

import { City } from "../../api/trip/trip.types";
import { CustomButton } from "../CustomButton/CustomButton";
import { CustomDatePicker } from "../CustomDatePicker/CustomDatePicker";
import { CloseIcon } from "../Icons/CloseIcon";
import { Selector } from "../Selector/Selector";
import { MOCK_CITIES } from "../../constants/cities";
import { MAX_DATE } from "./addTripModal.config";
import { AddTripModalProps } from "./addTripModal.types";

export function AddTripModal({
  show,
  onTripAdd,
  onClose,
}: Readonly<AddTripModalProps>) {
  const [selectedCity, setSelectedCity] = useState<City>();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string) =>
      setter(value);

  const handleDoneClick = () => {
    if (!selectedCity || !startDate || !endDate) return;
    if (startDate > endDate) return;
    onTripAdd({
      id: new Date().getTime().toString(),
      city: selectedCity,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });
    onClose();
  };
  return (
    <div className={`weather-modal ${show ? "show" : ""}`}>
      <div className="weather-modal__body">
        <div className="weather-modal__header">
          <h2 className="weather-modal__header-title">Create trip</h2>
          <button
            className="weather-modal__close"
            onClick={onClose}
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
              name="city-selector"
              className="weather-modal__selector"
              placeholder="Please select a city"
              onVisibleItem={(city: City) => city.name}
              getKey={(city: City) => city.name}
              items={MOCK_CITIES}
              onSelectItem={setSelectedCity}
              renderItem={(city: City) => <div>{city.name}</div>}
            />
            <p>
              <span>*</span> Start date
            </p>
            <CustomDatePicker
              minDate={new Date()}
              maxDate={MAX_DATE}
              placeholder="Please select a start date"
              name="start-datepicker"
              className="weather-modal__datepicker"
              onSelectDate={handleInputChange(setStartDate)}
            />
            <p>
              <span>*</span> End date
            </p>
            <CustomDatePicker
              minDate={new Date()}
              maxDate={MAX_DATE}
              name="end-datepicker"
              placeholder="Please select an end date"
              className="weather-modal__datepicker"
              onSelectDate={handleInputChange(setEndDate)}
            />
          </form>
        </div>
        <div className="weather-modal__footer">
          <div className="weather-modal_button-container">
            <CustomButton variant="outlined" onClick={onClose}>
              Cancel
            </CustomButton>
            <CustomButton onClick={handleDoneClick}>Save</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
