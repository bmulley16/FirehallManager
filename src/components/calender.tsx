import { DateTime } from "luxon";
import Cell from "./cell";

const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

const currentTime = DateTime.local();

const currentMonth = currentTime.toLocaleString({ month: "long" });
const daysInMonth = currentTime.daysInMonth;

export function Calender() {
  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className="col-span-3">{currentMonth}</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {daysofWeek.map((day) => (
          <Cell key={day} className=" text-sm font-bold">
            {day}
          </Cell>
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
