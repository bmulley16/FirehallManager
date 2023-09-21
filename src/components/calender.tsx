import { DateTime } from "luxon";
import Cell from "./cell";
import { useState } from "react";
const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

const currentTime = DateTime.local();

const currentMonth = currentTime.toLocaleString({ month: "long" });
const daysInMonth = currentTime.daysInMonth;

// const changeMonthRendering =

const goToNextMonth = () => {
  const [nextMonth, setNextMonth] = useState(
    currentTime.plus({ months: 1 }).toLocaleString({ month: "long" })
  );
  return nextMonth;
};

const goToPrevMonth = () => {
  const [prevMonth, setprevMonth] = useState(
    currentTime.minus({ months: 1 }).toLocaleString({ month: "long" })
  );

  return prevMonth;
};

export function Calender() {
  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell className="hover:font-bold">{"<<"}</Cell>
        <Cell className="hover:font-bold">{"<"}</Cell>
        <Cell className="col-span-3 hover:font-bold">{currentMonth}</Cell>
        <Cell onClick={goToNextMonth} className="hover:font-bold ">
          {">"}
        </Cell>
        <Cell className="hover:font-bold">{">>"}</Cell>

        {daysofWeek.map((day) => (
          <Cell key={day} className=" text-sm font-bold">
            {day}
          </Cell>
        ))}

        {(() => {
          if (daysInMonth !== undefined) {
            const cells = [];
            for (let i = 1; i <= daysInMonth; i++) {
              cells.push(
                <Cell key={i} className="hover:font-bold">
                  {i}
                </Cell>
              );
            }
            return cells;
          }
        })()}
      </div>
    </div>
  );
}
