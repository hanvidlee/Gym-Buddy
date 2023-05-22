import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

// option 2 extras
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';

// OPTION 3
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import CheckIcon from '@mui/icons-material/Check';

// const Calendar = (props) => {
//   const [value, setValue] = useState(new Date());
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         // mask='____/__/__'
//         variant='static'
//         orientation='portrait'
//         value={value}
//         disableFuture
//         onChange={(newValue) => setValue(newValue)}
//         renderInput={(params) => {
//           <TextField {...params} />;
//         }}
//         renderDay={(day, _value, DayComponentProps) => {
//           const isSelected =
//             !DayComponentProps.outsideCurrentMonth &&
//             highlightedDays.indexOf(day.getDate()) >= 0;

//           return (
//             <Badge
//               key={day.toString()}
//               overlap='circular'
//               badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
//             >
//               <PickersDay {...DayComponentProps} />
//             </Badge>
//           );
//         }}
//       />
//     </LocalizationProvider>
//   );
// };

// export default Calendar;

// option 2
export default function Calendar({ workouts }) {

  const workoutDates = workouts.map((workout) => {
    return dayjs(workout.workout_date).toDate().toDateString(); // returns an array of parsed dates from database
  });

  // const [value, setValue] = React.useState(new Date());
  // const [dateState, setDateState] = useState(dayjs(workout?.workout_date));
  const [dateState, setDateState] = useState(dayjs());
  const [highlightedDays, setHighlightedDays] = useState(workoutDates);

  const parsedValue = dateState.toDate().toDateString(); // parsed value from calendar date

  const hasSameDate = workoutDates.some((parsedWorkout) => {
    return dayjs(parsedValue).isSame(parsedWorkout);
  });

  console.log(hasSameDate);

  // useEffect(() => {
  //   const filteredDays = workoutDates.filter((parsedWorkout) => {
  //     return dayjs(parsedWorkout).isSame(dateState, 'day');
  //   });
  //   setHighlightedDays(filteredDays.map((day) => dayjs(day).date()));
  // }, [dateState, workoutDates]);

  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        value={dateState}
        onChange={onDateChange}
        renderInput={(params) => (<TextField {...params} />
        )}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.includes(dayjs(day).date());

          return (
            <Badge
              key={day.toString()}
              overlap='circular'
              badgeContent={isSelected ? <FitnessCenterIcon color='red' /> : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
      <Badge badgeContent={hasSameDate ? <FitnessCenterIcon /> : undefined}/>
    </LocalizationProvider>
  );
}

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
