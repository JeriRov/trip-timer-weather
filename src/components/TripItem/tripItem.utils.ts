import { format } from "date-fns";

import { FORMAT } from "constants/formats";

export const formatTripItemDate = (date: string) => {
  return format(new Date(date), FORMAT.EUROPEAN);
};
