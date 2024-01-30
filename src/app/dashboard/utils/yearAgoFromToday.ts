export const yearAgoFromToday = () => {
  let today = new Date();
  let oneYearAgo = new Date(today.setFullYear(today.getFullYear() - 1));
  return oneYearAgo;
}