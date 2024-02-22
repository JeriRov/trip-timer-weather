import "./customDatePicker.styles.css";

import { format } from "date-fns";
import React, { ChangeEvent, FocusEvent, useState } from "react";

import { CustomDatePickerProps } from "components/CustomDatePicker/customDatePicker.types";
import { CalendarIcon } from "components/Icons/CalendarIcon";

import { FORMAT } from "constants/formats";

export function CustomDatePicker({
  onSelectDate,
  className,
  minDate,
  maxDate,
  ...props
}: CustomDatePickerProps) {
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
        className={`custom-datepicker__input ${className}`}
        max={maxDate ? format(maxDate, FORMAT.ISO_8601) : undefined}
        min={minDate ? format(minDate, FORMAT.ISO_8601) : undefined}
        onBlur={handleBlur}
        onChange={handleDateChange}
        onFocus={handleFocus}
        value={selectedDate || ""}
        {...props}
        type="text"
      />
      <CalendarIcon className="custom-datepicker__calendar-icon" />
    </div>
  );
}
