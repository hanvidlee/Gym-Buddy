import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';

export default function Calendar({ workouts }) {
  const workoutDates = workouts.map((workout) => {
    return dayjs(workout.workout_date).toDate().toDateString(); // returns an array of parsed dates from database
  });

  // const [value, setValue] = React.useState(new Date());
  // const [dateState, setDateState] = useState(dayjs(workout?.workout_date));
  const [dateState, setDateState] = useState(dayjs());
  
  // console.log('date: ', dateState)

  const parsedValue = dateState.toDate().toDateString() // parsed value from calendar date

  const hasSameDate = workoutDates.some((parsedWorkout) => {
    return dayjs(parsedValue).isSame(parsedWorkout)
  })

  console.log(hasSameDate)

  const onDateChange = (newDate) => {
    setDateState(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        value={dateState}
        onChange={onDateChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

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
