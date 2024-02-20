import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export type SelectorProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  onVisibleItem: (item: T) => string;
  onSelectItem: (item: T) => void;
  getKey: (item: T) => string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
