import { format } from "date-fns";

const DATE_FORMAT = "yyyy-MM-dd"; //ISO 8601
export const formatDateToString = (date: Date) => format(date, DATE_FORMAT);
