import { DateTime } from "luxon";
import Cell from "./cell";
import { useState } from "react";
import DailyOnClickComponent from "./dailyRenderedCalenderInterface";
const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

export function Calender() {
  const [currentDatetime, setCurrentDatetime] = useState(DateTime.local());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const theDailyOnClickInterfaceRender = () => {
    return <DailyOnClickComponent></DailyOnClickComponent>;
  };

  const goToNextMonth = () => {
    setCurrentDatetime(currentDatetime.plus({ months: 1 }));
  };

  const goToPrevMonth = () => {
    setCurrentDatetime(currentDatetime.minus({ months: 1 }));
  };

  const advanceTwoMonths = () => {
    setCurrentDatetime(currentDatetime.plus({ months: 2 }));
  };
  const goBackTwoMonths = () => {
    setCurrentDatetime(currentDatetime.minus({ months: 2 }));
  };

  const daysofWeekCells = daysofWeek.map((day) => <Cell key={day}>{day}</Cell>);

  const daysInMonth = currentDatetime.daysInMonth;
  const renderDaysInMonth = () => {
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
  let dailyOnClickInterface = null;
  if (selectedDay !== null) {
    dailyOnClickInterface = <DailyOnClickComponent selectedDay={selectedDay} />;
  }

  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={goBackTwoMonths}>{"<<"}</Cell>
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
        <Cell className={"col-span-3"}>
          {currentDatetime.toLocaleString({ month: "long" })}
        </Cell>
        <Cell onClick={goToNextMonth}>{">"}</Cell>
        <Cell onClick={advanceTwoMonths}>{">>"}</Cell>

        {daysofWeekCells}
        {renderDaysInMonth()}
      </div>
      {dailyOnClickInterface()}
    </div>
  );
}
