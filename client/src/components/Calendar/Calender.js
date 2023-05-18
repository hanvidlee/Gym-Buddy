import React, { useState } from 'react';
import { generateDate, months } from './calendarUtil';
import cn from './cn';
import dayjs from 'dayjs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { CgGym } from 'react-icons/cg';
import {
  getWorkoutForDayPerUser,
  getAllWorkoutsPerUserAndDates,
} from '../../helpers/selectors';
import { database } from '../Application';

export default function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const parsedSelectDate = selectDate.toDate().toDateString();
  const parsedToday = today.toDate().toDateString();

  // console.log('this is current date', parsedToday)
  const userWorkouts = getWorkoutForDayPerUser(database, 1, parsedSelectDate);

  const { workouts, workoutDays } = getAllWorkoutsPerUserAndDates(database, 1);
  // console.log('this is my workouts ', workouts)
  // console.log('this is my day!!', workoutDays)

  function Workout({ workout }) {
    return (
      <li>
        <div>I did workout today! Workout-id is {workout.id}</div>
        <div>Title</div>
      </li>
    );
  }

  const convertedDays = workoutDays.map((day) => {
    // console.log(day.year, day.month, day.day);
    if (!day) {
      return false;
    }
    const formattedDate = dayjs(
      `${day.month}-${day.day}-${day.year}`,
      'M-D-YYYY'
    ).format('ddd MMM DD YYYY');

    return formattedDate;
  });
  // date i have right now: Mon May 01 2023

  const calendarDates = generateDate(today.month(), today.year());

  return (
    <div className="flex w-2/3 mx-auto divide-x-2 gap-10 h-screen items-center bg-white">
      <div className="w-96 h-96">
        <div className="flex justify-between">
          <h1>
            {months[today.month()]}, {today.year()}
          </h1>

          <div className="flex items-center gap-5">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-7 text-gray-500">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="h-14 border-b grid place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="w-full grid grid-cols-7">
          {calendarDates.map(({ date, currentMonth, today }, index) => {
            const isCurrentDate = selectDate.isSame(date, 'day');
            const isActiveDate = today && isCurrentDate;
            const hasWorkout = workouts.some((workout) => {
              return convertedDays.some((convertedDay) => {
                return dayjs(date).isSame(convertedDay, 'day');
              });
            });

            console.log(hasWorkout);

            return (
              <div key={index} className="h-14 grid place-content-center">
                <h1
                  className={cn(
                    currentMonth ? '' : 'text-gray-400',
                    today ? 'text-red-600' : '',
                    isActiveDate ? 'bg-red-600 text-white' : '',
                    isCurrentDate ? 'bg-black text-white' : '',
                    'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>

                <div classsName="w-1 h-1 mx-auto mt-1">
                  {hasWorkout && <CgGym />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-96 h-96 px-5">
        <h1>Workout for {selectDate.format('dddd, MMMM D, YYYY')}.</h1>
        {userWorkouts.length > 0 ? (
          <ol>
            {userWorkouts.map((workout) => (
              <Workout workout={workout} key={workout.id} />
            ))}
          </ol>
        ) : (
          <p>No workout for today.</p>
        )}
      </div>
    </div>
  );
}
