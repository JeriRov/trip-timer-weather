import { useState } from "react";

type Timer = ReturnType<typeof setTimeout>;
type DelayFunction<T> = (...args: T[]) => void;
export const useDebounce = <T>(func: DelayFunction<T>, delay: number) => {
  const [timer, setTimer] = useState<Timer>();

  return ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);

    clearTimeout(timer);
    setTimer(newTimer);
  }) as DelayFunction<T>;
};
