type DelayFunction<T> = (...args: T[]) => void;
export const debounce = <T>(func: DelayFunction<T>, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<DelayFunction<T>>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
