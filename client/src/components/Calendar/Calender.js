import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const initialValue = dayjs()
const months = [ "January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December" ];

const Day = (props) => {
  const { highlightedDays = [], day, outsideCurrentMonth, currentMonth, ...other } = props;
  const workoutDaysWithMonth = []
  const workoutDays = []

  highlightedDays.map(day => {
    const splitDay = day.split(' ')
    workoutDaysWithMonth.push({[splitDay[1]]: parseInt(splitDay[2], 10)})
    workoutDays.push(parseInt(splitDay[2], 10))
  })

  const isSelected =
    !props.outsideCurrentMonth && workoutDaysWithMonth.map(el => el[months[currentMonth]]).indexOf(day.date()) >= 0

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? <FitnessCenterIcon style={{ fontSize: '12px'}} /> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function Calendar({ dailyWorkouts }) {

  const [isLoading, setIsLoading] = useState(false);
  const [currentMonth, setCurrentMonth] = useState()

  const workoutDates = dailyWorkouts.map((workout) => {
    return dayjs(workout.workout_date).toDate().toDateString(); // returns an array of parsed dates from database
  });

  const handleMonthChange = (date) => {
    setCurrentMonth(date.$M)
  }

  useEffect(() => {
    handleMonthChange(dayjs(new Date()))
  }, [])

  const [dateState, setDateState] = useState(dayjs());

  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={initialValue}
        loading={isLoading}
        orientation="portrait"
        value={dateState}
        onChange={onDateChange}
        renderInput={(params) => (<TextField {...params} />
        )}
        renderLoading={() => <DayCalendarSkeleton />}
        onMonthChange={handleMonthChange}
        slots={{
          day: Day
        }}
        slotProps={{
          day: {
            highlightedDays: workoutDates,
            currentMonth: currentMonth,
          },
        }}
      />
    </LocalizationProvider>
  );
}



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
