import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CustomDatePickerProps = {
  onSelectDate: (date: string) => void;
  minDate?: Date;
  maxDate?: Date;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
