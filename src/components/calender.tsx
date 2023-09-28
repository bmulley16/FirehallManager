import { DateTime } from "luxon";
import Cell from "./cell";
import { useState } from "react";
const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

export function Calender() {
  const [currentDatetime, setCurrentDatetime] = useState(DateTime.local());

  const goToNextMonth = () => {
    setCurrentDatetime(currentDatetime.plus({ months: 1 }));
  };

  const goToPrevMonth = () => {
    setCurrentDatetime(currentDatetime.minus({ months: 1 }));
  };

  const daysofWeekCells = daysofWeek.map((day) => <Cell key={day}>{day}</Cell>);

  const daysInMonth = currentDatetime.daysInMonth;
  const renderDaysInMonth = () => {
    if (daysInMonth !== undefined) {
      const cells = [];
      for (let i = 1; i <= daysInMonth; i++) {
        cells.push(<Cell key={i}>{i}</Cell>);
      }

      return cells;
    }
  };

  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell onClick={goToPrevMonth}>
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

        {daysofWeekCells}
        {renderDaysInMonth()}
      </div>
    </div>
  );
}

/*

- Use a Luxon DateTime object as the main piece of state. You can update just this to move forward/backwards the months. Everything that needs to display datetime info can just use this one piece of state. This is how you make things reactive
- You wanna make your cells fill up the parent and be clickable

*/
