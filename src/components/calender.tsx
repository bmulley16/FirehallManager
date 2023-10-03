import { DateTime } from "luxon";
import Cell from "./cell";
import { useState } from "react";
import DailyOnClickComponent from "./dailyRenderedCalenderInterface";
const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

// luxon days of week and month stuff

export default function Calender() {
  const [currentDatetime, setCurrentDatetime] = useState(DateTime.local());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const theDailyOnClickInterfaceRender = () => {
    return <DailyOnClickComponent></DailyOnClickComponent>;
  };

  const goForwardMonths = (num: number) => {
    setCurrentDatetime(currentDatetime.plus({ months: num }));
  };

  const goBackMonths = (num: number) => {
    setCurrentDatetime(currentDatetime.minus({ months: num }));
  };

  const daysofWeekCells = daysofWeek.map((day) => <Cell key={day}>{day}</Cell>);

  const daysInMonth = currentDatetime.daysInMonth;
  const renderDaysInMonth = () => {
    // if (!daysInMonth) - alternative
    if (daysInMonth !== undefined) {
      const cells = [];
      for (let i = 1; i <= daysInMonth; i++) {
        cells.push(
          <Cell onClick={() => setSelectedDay(i)} key={i}>
            {i}
          </Cell>
        );
      }

      return cells;
    }
  };

  function dailyOnClickInterface() {
    // if (!selected) - alternative
    if (selectedDay !== null) {
      let DailyConentRender = (
        <DailyOnClickComponent selectedDay={selectedDay} />
      );

      return DailyConentRender;
    }
  }
  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={() => goBackMonths(1)}>{"<<"}</Cell>
        <Cell onClick={goBackMonths}>
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
        <Cell className={"col-span-3"}>
          {currentDatetime.toLocaleString({ month: "long" })}
        </Cell>
        <Cell onClick={goForwardMonths(1)}>{">"}</Cell>
        <Cell onClick={goForwardMonths(2)}>{">>"}</Cell>

        {daysofWeekCells}
        {renderDaysInMonth()}
      </div>
      {dailyOnClickInterface()}
    </div>
  );
}
