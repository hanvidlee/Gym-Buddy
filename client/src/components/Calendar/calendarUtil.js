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




// import React, { useState } from 'react';
// import { generateDate, months } from './calendarUtil';
// import cn from './cn';
// import dayjs from 'dayjs';
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
// import { CgGym } from 'react-icons/cg';
// import { BsCalendarPlusFill } from "react-icons/bs";
// import {
//   getWorkoutForDayPerUser,
//   getAllWorkoutsPerUserAndDates,
// } from '../../helpers/selectors';
// import { database } from '../Application';

// export default function Calendar() {
//   const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

//   const currentDate = dayjs();

//   const [today, setToday] = useState(currentDate);
//   const [selectDate, setSelectDate] = useState(currentDate);

//   const parsedSelectDate = selectDate.toDate().toDateString();
//   const parsedToday = today.toDate().toDateString();

 
//   const userWorkouts = getWorkoutForDayPerUser(database, 1, parsedSelectDate);

//   const { workouts, workoutDays } = getAllWorkoutsPerUserAndDates(database, 1);

//   function Workout({ workout }) {
//     return (
//       <li>
//         <div>Workout ID: {workout.id}</div>
//         <div>Title: {workout.title}</div>
//       </li>
//     );
//   }

//   const convertedDays = workoutDays.map((day) => {
//     if (!day) {
//       return false;
//     }
//     const formattedDate = dayjs(
//       `${day.month}-${day.day}-${day.year}`,
//       'M-D-YYYY'
//     ).format('ddd MMM DD YYYY');

//     return formattedDate;
//   });

//   const calendarDates = generateDate(today.month(), today.year());

//   return (
//     <div className="flex w-2/3 mx-auto divide-x-2 gap-10 h-screen items-center bg-white">
//       <div className="w-96 h-96">
//         <div className="flex justify-between">
//           <h1>
//             {months[today.month()]}, {today.year()}
//           </h1>

//           <div className="flex items-center gap-5">
//             <GrFormPrevious
//               className="w-5 h-5 cursor-pointer"
//               onClick={() => {
//                 setToday(today.month(today.month() - 1));
//               }}
//             />
//             <h1
//               className="cursor-pointer"
//               onClick={() => {
//                 setToday(currentDate);
//               }}
//             >
//               Today
//             </h1>
//             <GrFormNext
//               className="w-5 h-5 cursor-pointer"
//               onClick={() => {
//                 setToday(today.month(today.month() + 1));
//               }}
//             />
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-7 text-gray-500">
//           {days.map((day, index) => {
//             return (
//               <h1
//                 key={index}
//                 className="h-14 border-b grid place-content-center text-sm"
//               >
//                 {day}
//               </h1>
//             );
//           })}
//         </div>

//         <div className="w-full grid grid-cols-7">
//           {calendarDates.map(({ date, currentMonth, today }, index) => {
//             const isCurrentDate = selectDate.isSame(date, 'day');
//             const isActiveDate = today && isCurrentDate;
//             const hasWorkout = workouts.some((workout) => {
//               return convertedDays.some((convertedDay) => {
//                 return dayjs(date).isSame(convertedDay, 'day');
//               });
//             });

//             console.log(hasWorkout);

//             return (
//               <div key={index} className="h-14 grid place-content-center">
//                 <h1
//                   className={cn(
//                     currentMonth ? '' : 'text-gray-400',
//                     today ? 'text-red-600' : '',
//                     isActiveDate ? 'bg-red-600 text-white' : '',
//                     isCurrentDate ? 'bg-black text-white' : '',
//                     'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
//                   )}
//                   onClick={() => {
//                     setSelectDate(date);
//                   }}
//                 >
//                   {date.date()}
//                 </h1>

//                 <div classsName="w-1 h-1 mx-auto mt-1">
//                   {hasWorkout && <CgGym />}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="w-96 h-96 px-5">
//         <h1>Workout for {selectDate.format('dddd, MMMM D, YYYY')}.</h1>
//         {userWorkouts.length > 0 ? (
//           <ol>
//             {userWorkouts.map((workout) => (
//               <Workout workout={workout} key={workout.id} />
//             ))}
//           </ol>
//         ) : (
//           // <p>No workout for today.</p>
//           <BsCalendarPlusFill/>
//         )}
//       </div>
//     </div>
//   );
// }



// export default function Calendar({dailyWorkouts}) {


//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DateCalendar
//         defaultValue={initialValue}
//         loading={isLoading}
//         renderLoading={() => <DayCalendarSkeleton />}
//         onMonthChange={handleMonthChange}
//         slots={{
//           day: Day
//         }}
//         slotProps={{
//           day: {
//             highlightedDays: workoutDates,
//             currentMonth: currentMonth,
//           },
//         }}
//       />
//     </LocalizationProvider>
//   );
// }


// option 2
// export default function Calendar({ dailyWorkouts }) {

//   const workoutDates = dailyWorkouts.map((workout) => {
//     return dayjs(workout.workout_date).toDate().toDateString(); // returns an array of parsed dates from database
//   });


//   const [value, setValue] = React.useState(new Date());
//   // const [dateState, setDateState] = useState(dayjs(workout?.workout_date));
//   const [dateState, setDateState] = useState(dayjs());
//   const [highlightedDays, setHighlightedDays] = useState(workoutDates);

//   const parsedValue = dateState.toDate().toDateString(); // parsed value from calendar date

//   const hasSameDate = workoutDates.some((parsedWorkout) => {
//     return dayjs(parsedValue).isSame(parsedWorkout);
//   });

//   console.log(hasSameDate);

//   useEffect(() => {
//     const filteredDays = workoutDates.filter((parsedWorkout) => {
//       return dayjs(parsedWorkout).isSame(dateState, 'day');
//     });
//     setHighlightedDays(filteredDays.map((day) => dayjs(day).date()));
//   }, [dateState, workoutDates]);

//   const onDateChange = (newDate) => {
//     setDateState(newDate);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         orientation="portrait"
//         value={dateState}
//         onChange={onDateChange}
//         renderInput={(params) => (<TextField {...params} />
//         )}
//         renderDay={(day, _value, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlightedDays.includes(dayjs(day).date());

//           return (
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <FitnessCenterIcon color='red' /> : undefined}
//             >
//               <PickersDay {...DayComponentProps} />
//             </Badge>
//           );
//         }}
//       />
//       <Badge badgeContent={hasSameDate ? <FitnessCenterIcon /> : undefined}/>
//     </LocalizationProvider>
//   );
// }

// renderDay={(day, _value, DayComponentProps) => {
//   const isSelected =
//     !DayComponentProps.outsideCurrentMonth &&
//     highlightedDays.indexOf(day.getDate()) >= 0;

//   return (
//     <Badge
//       key={day.toString()}
//       overlap="circular"
//       badgeContent={hasSameDate ? <FitnessCenterIcon /> : null}
//       invisible={!isSelected}
//     >
//       {/* <PickersDay {...DayComponentProps} selected={isSelected}/> */}
//       <DayComponentProps.containers.Day
//         {...DayComponentProps}
//         disableMargin
//         selected={isSelected}
//       />
//     </Badge>
//   );
// }}

// export default function Calendar(props) {

//   const dailyWorkouts = props.dailyWorkouts;

//   const workoutDates = dailyWorkouts.map((workout) => {
//     return dayjs(workout.workout_date).toDate().toDateString();  // returns an array of parsed dates from database
//   })

//   const [value, setValue] = React.useState(dayjs());

//   console.log('this is the value: ', value);

//   const parsedValue = value.toDate().toDateString() // parsed value from calendar date

//   const hasSameDate = workoutDates.some((parsedWorkout) => {
//     return dayjs(parsedValue).isSame(parsedWorkout)
//   })

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateCalendar', 'DateCalendar']}>
//         <DemoItem label="Controlled calendar">
//           <DateCalendar
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//            renderInput={(params) => <TextField {...params} />}
//            />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
