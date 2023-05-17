import React, { useState } from 'react';
import { generateDate, months } from './calendarUtil';
import cn from './cn';
import dayjs from 'dayjs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { CgGym } from 'react-icons/cg';
import { getWorkoutForDayPerUser,  getAllWorkoutsPerUser } from '../../helpers/selectors';
import { database } from '../Application';


export default function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const parsedSelectDate =  selectDate.toDate().toDateString();

  const workouts = getWorkoutForDayPerUser(database, 1, parsedSelectDate)

  const allWorkouts = getAllWorkoutsPerUser(database, 1)

  function Workout({ workout }) {
    return (
      <li>
        <div>I did workout today! Workout-id is {workout.id}</div>
         <div>Title</div>
     </li>
    )
  }

  //dayFlag[day] && <Cylogn/>

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
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              // const dateString = date.toDate().toDateString();
              const isCurrentDate = selectDate.isSame(date, 'day');
              const isActiveDate = today && isCurrentDate;

              return (
                <div key={index} className="h-14 grid place-content-center">
                  <h1
                    className={cn(
                      currentMonth ? '' : 'text-gray-400',
                      today ? 'text-red-600' : '',
                      isActiveDate ? 'bg-red text-white' : '', // not working...unsure why
                      isCurrentDate ? 'bg-black text-white' : '',
                      'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
                    )}
                    onClick={() => {
                      setSelectDate(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                  
                  {/* <div classsName="w-1 h-1 mx-auto mt-1" >
                    {allWorkouts.some((workout) =>
                      dayjs(workout.).isSame(date, 'day')
                    ) && (
                      <div classsName="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div> */}
                  <CgGym/>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="w-96 h-96 px-5">
        <h1>Workout for {selectDate.format('dddd, MMMM D, YYYY')}.</h1>
        {workouts.length > 0 ? (
          <ol>
            {workouts.map((workout) => (
              <Workout workout={workout} key={workout.id}/>
            ))}
          </ol>
        ) : (
          <p>No workout for today.</p>
        )}
      </div>
    </div>
  );
}
