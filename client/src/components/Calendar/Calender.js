import React from 'react';
import { generateDate } from './calendarUtil';

export default function Calendar() {
  console.log(generateDate());

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className='w-96 h-96'>
      <div className='w-full grid grid-cols-7'>
        {days.map((day, index) => {
          return (
            <h1 key={index}>{day}</h1>
          )
        })}
      </div>

      <div className='w-full grid grid-cols-7'>
        {generateDate().map(({ date, currentMonth, today }, index) => {
          return (
            <div key={index}>
              <h1>{date.date()}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
