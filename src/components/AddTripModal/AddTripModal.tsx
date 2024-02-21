import "./AddTripModal.css";

import React, { FC, useState } from "react";

import { City } from "../../api/trip/trip.types";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";
import { CloseIcon } from "../../components/Icons/CloseIcon";
import { Selector } from "../../components/Selector/Selector";
import { MOCK_CITIES } from "../../constants/cities";
import { MAX_DATE } from "./addTripModal.config";
import { AddTripModalProps } from "./addTripModal.types";

export const AddTripModal: FC<AddTripModalProps> = ({
  show,
  onTripAdd,
  onClose,
}) => {
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
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal__body">
        <div className="modal__header">
          <h2 className="modal__header-title">Create trip</h2>
          <button className="modal__close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="modal__content">
          <form autoComplete="off" className="modal__form modal__label-text">
            <p>
              <span>*</span> City
            </p>
            <Selector<City>
              name="city-selector"
              className={"modal__selector"}
              placeholder={"Please select a city"}
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
              className="modal__datepicker"
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
              className="modal__datepicker"
              onSelectDate={handleInputChange(setEndDate)}
            />
          </form>
        </div>
        <div className="modal__footer">
          <div className="modal_button-container">
            <CustomButton variant="outlined" onClick={onClose}>
              Cancel
            </CustomButton>
            <CustomButton onClick={handleDoneClick}>Save</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
