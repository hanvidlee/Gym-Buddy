import dayjs from 'dayjs';

export const generateDate = (
  // use dayjs().month and dayjs().year as default values for the 'month' and 'year' parameters if no values are provided when calling the 'generateDate' function. This means, the current month and year are used if no speciific values are passed.
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month'); // Mon May 01 2023 00:00
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month'); // Wed May 31 2023 23:59

  // loop to generate dates for the entire month
  const arrayOfDate = [];

  // i = 1; i <= 31, i ++
  // set the day of the month by passingg current day 'i' as argument
  // create new Date.js date object and push it to array
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push(firstDateOfMonth.date(i));
  }

  return [arrayOfDate];
};
