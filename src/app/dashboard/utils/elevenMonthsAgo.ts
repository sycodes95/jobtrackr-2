export const elevenMonthsAgo = () => {
  let today = new Date(); // Get today's date
  let elevenMonthsAgo = new Date();
  elevenMonthsAgo.setMonth(today.getMonth() - 11);

  return elevenMonthsAgo
}
