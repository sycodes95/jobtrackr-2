export const formatDateToReadable = (inputDate: string) : string => {
  const dateObj = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}