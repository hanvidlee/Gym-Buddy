import React, { useState } from 'react';
import { generateDate, months } from './calendarUtil';
import cn from './cn';
import dayjs from 'dayjs';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { CgGym } from 'react-icons/cg';

export default function Calendar() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const state = {
    days: [
      {
        id: 1,
        month: 'May',
        day: 1,
        year: 2023,
        empty: false,
        created_at: '2023-05-17T03:00:36.603Z',
        updated_at: '2023-05-17T03:00:36.603Z',
        deleted_at: null,
      },
      {
        id: 2,
        month: 'May',
        day: 2,
        year: 2023,
        empty: false,
        created_at: '2023-05-17T03:00:36.612Z',
        updated_at: '2023-05-17T03:00:36.612Z',
        deleted_at: null,
      },
      {
        id: 3,
        month: 'May',
        day: 3,
        year: 2023,
        empty: false,
        created_at: '2023-05-17T03:00:36.619Z',
        updated_at: '2023-05-17T03:00:36.619Z',
        deleted_at: null,
      },
      {
        id: 4,
        month: 'May',
        day: 4,
        year: 2023,
        empty: true,
        created_at: '2023-05-17T03:00:36.629Z',
        updated_at: '2023-05-17T03:00:36.629Z',
        deleted_at: null,
      },
    ],

    workouts: [
      {
        id: 1,
        picture: 'https://randomuser.me/api/portraits/women/1.jpg',
        description: 'Today was hard, I did like so much work. #sweat',
        deleted_at: null,
        created_at: '2023-05-01T00:12:08.109Z',
        updated_at: '2023-05-17T00:12:08.109Z',
      },
      {
        id: 2,
        picture: 'https://randomuser.me/api/portraits/men/2.jpg',
        description:
          "Wow, I feel so energized and refreshed after that workout! It's amazing how much better I feel when I take care of my body.",
        deleted_at: null,
        created_at: '2023-05-05T00:12:08.117Z',
        updated_at: '2023-05-17T00:12:08.117Z',
      },
      {
        id: 3,
        picture: 'https://randomuser.me/api/portraits/women/3.jpg',
        description:
          "My muscles are definitely feeling the burn, but it was totally worth it. I know I'm making progress towards my fitness goals.",
        deleted_at: null,
        created_at: '2023-05-15T00:12:08.122Z',
        updated_at: '2023-05-20T00:12:08.122Z',
      },
    ],

    day_workouts: [
      {
        id: 1,
        day_id: 1,
        workout_id: 1,
        created_at: '2023-05-17T03:00:36.663Z',
        updated_at: '2023-05-17T03:00:36.663Z',
      },
      {
        id: 2,
        day_id: 2,
        workout_id: 2,
        created_at: '2023-05-17T03:00:36.673Z',
        updated_at: '2023-05-17T03:00:36.673Z',
      },
      {
        id: 3,
        day_id: 3,
        workout_id: 3,
        created_at: '2023-05-17T03:00:36.683Z',
        updated_at: '2023-05-17T03:00:36.683Z',
      },
      {
        id: 4,
        day_id: 5,
        workout_id: 4,
        created_at: '2023-05-17T03:00:36.696Z',
        updated_at: '2023-05-17T03:00:36.696Z',
      },
    ],
  };

  console.log(state.workouts.map((workout) => dayjs(workout.created_at)));

  console.log(
    'this is the selecteedate!!!!',
    selectDate.toDate().toDateString()
  );

  const filteredWorkouts = state.workouts.filter((workout) =>
    dayjs(workout.created_at).isSame(selectDate.toDate().toDateString(), 'day')
  );

  console.log(filteredWorkouts);

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
                  {/* <div>
                    {filteredWorkouts.some((workout) =>
                      dayjs(workout.created_at).isSame(date, 'day')
                    ) && (
                      <div classsName="w-1 h-1 mx-auto mt-1 roundded-full bg-sky-500"></div>
                    )}
                  </div> */}
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="w-96 h-96 px-5">
        <h1>Workout for {selectDate.format('dddd, MMMM D, YYYY')}.</h1>
        {filteredWorkouts.length > 0 ? (
          <ol>
            {filteredWorkouts.map((workout) => (
              <li key={workout.id}>
                <div>I did workout today! Workout-id is {workout.id}</div>
              </li>
            ))}
          </ol>
        ) : (
          <p>No workout for today.</p>
        )}
      </div>
    </div>
  );
}
