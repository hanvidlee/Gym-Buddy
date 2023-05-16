import dayjs from 'dayjs';

export const generateDate = (
  // use dayjs().month and dayjs().year as default values for the 'month' and 'year' parameters if no values are provided when calling the 'generateDate' function. This means, the current month and year are used if no speciific values are passed.
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month'); // Mon May 01 2023 00:00  => object
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month'); // Wed May 31 2023 23:59

  // loop to generate dates for the entire month
  const arrayOfDate = [];

  // create prefix date
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false,
    });
  }

  /*** generate current date
   * i = 1; i <= 31, i ++
   * set the day of the month by passing current day 'i' as argument
   * create new Date.js date object and push it to array
   */
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(), // dayjs() returns current date and time as object
    });
  }

  // generate suffix date
  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({
      date: lastDateOfMonth.date(i),
      currentMonth: false,
    });
  }

  return arrayOfDate;
};

export const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];