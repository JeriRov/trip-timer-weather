import "./CustomDatePicker.css";

import { format } from "date-fns";
import React, { ChangeEvent, FC, FocusEvent, useState } from "react";

import { CalendarIcon } from "../../components/Icons/CalendarIcon";
import { FORMAT } from "../../constants/formats";
import { CustomDatePickerProps } from "./customDatePicker.types";

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  onSelectDate,
  className,
  minDate,
  maxDate,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    onSelectDate(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.type = "date";
    try {
      e.target.showPicker();
    } catch (error) {
      e.target.blur();
    }
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      e.target.type = "text";
    }
  };

  return (
    <div className="custom-datepicker__container">
      <input
        value={selectedDate || ""}
        min={minDate && format(minDate, FORMAT.ISO_8601)}
        max={maxDate && format(maxDate, FORMAT.ISO_8601)}
        className={`custom-datepicker__input ${className}`}
        onChange={handleDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
        type="text"
      />
      <CalendarIcon className="custom-datepicker__calendar-icon" />
    </div>
  );
};
