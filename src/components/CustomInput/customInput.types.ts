import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export type CustomInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  containerClassName?: string;
  icon?: ReactNode;
};
