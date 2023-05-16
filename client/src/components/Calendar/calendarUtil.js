import dayjs from 'dayjs';

export const generateDate = (
  // use dayjs().month and dayjs().year as default values for the 'month' and 'year' parameters if no values are provided when calling the 'generateDate' function. This means, the current month and year are used if no speciific values are passed. 
  month = dayjs().month(),
  year = dayjs().year()
  ) => {

    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
    
    console.log(month, year);

    return [firstDateOfMonth, lastDateOfMonth];
};