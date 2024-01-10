import { format } from "date-fns"

export const formatDate = (date: Date, formatType: string ) => {
  return format(date, formatType)
}