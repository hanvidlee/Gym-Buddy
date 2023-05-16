import React from "react";
import { generateDate } from "./calendarUtil";

export default function Calendar() {

  console.log(generateDate());

  return(
    <div className="w-96 h-96 grid grid-cols-7">

    {generateDate().map(({ date, currentMonth, today }, index) => {
      return (
        <div>
          <h1>{date.date()}</h1>
        </div>
      );
    })}
    </div>
  )
}