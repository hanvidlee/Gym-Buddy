import React, { useState } from 'react';
import { generateDate, months } from './calendarUtil';
import cn from './cn';
import dayjs from 'dayjs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

export default function Calendar() {
  console.log(generateDate());

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);

  console.log(` THIS IS TODAY: ${today}`)

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
            onClick={() => {setToday(today.month(today.month() - 1))}}
            /> 
            <h1 className="cursor-pointer">Today</h1>
            <GrFormNext className="w-5 h-5 cursor-pointer" />
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
          {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
            return (
              <div key={index} className="h-14 grid place-content-center">
                <h1
                  className={cn(
                    currentMonth ? '' : 'text-gray-400',
                    today ? 'bg-red-600 text-white' : '',
                    'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-96 h-96 px-5">
        <h1>Workout for the day.</h1>
        <p>No workout for today.</p>
      </div>
    </div>
  );
}
