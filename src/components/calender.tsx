import { DateTime } from "luxon";
import Cell from "./cell";
import { useState } from "react";
const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

const currentTime = DateTime.local();
const daysInMonth = currentTime.daysInMonth;

// const currentMonth = () => {
//   const currentMonth = currentTime.toLocaleString({ month: "long" });

//   return currentMonth;
// };

// const changeMonthRendering =

// const goToNextMonth = () => {
//   const [nextMonth, setNextMonth] = useState(
//     currentTime.plus({ months: 1 }).toLocaleString({ month: "long" })
//   );
//   return nextMonth;
// };

// const goToPrevMonth = () => {
//   const [prevMonth, setprevMonth] = useState(
//     currentTime.minus({ months: 1 }).toLocaleString({ month: "long" })
//   );

//   return prevMonth;
// };

export function Calender() {
  const [currentDatetime, setCurrentDatetime] = useState(DateTime.local());

  const goToNextMonth = () => {
    setCurrentDatetime(currentDatetime.plus({ months: 1 }));
    console.log(currentDatetime.toLocaleString({ month: "long" }));
  };

  // const goToPrevMonth = () => {
  //   setCurrentDatetime(currentDatetime.minus({ months: 1}))
  // }

  const daysInMonth = currentDatetime.daysInMonth!;

  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </Cell>
        <Cell>{currentDatetime.toLocaleString({ month: "long" })}</Cell>
        <Cell onClick={goToNextMonth}>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {daysofWeek.map((day) => (
          <Cell key={day}>{day}</Cell>
        ))}

        {(() => {
          if (daysInMonth !== undefined) {
            const cells = [];
            for (let i = 1; i <= daysInMonth; i++) {
              cells.push(<Cell key={i}>{i}</Cell>);
            }
            return cells;
          }
        })()}
      </div>
    </div>
  );
}

/*
- Moving 
*/
