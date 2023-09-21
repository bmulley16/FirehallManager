import { DateTime } from "luxon";
import Cell from "./cell";

const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", " Fri", "Sat"];

const currentTime = DateTime.local();

const currentMonth = currentTime.month;
const daysInMonth = currentTime.daysInMonth;

export function Calender() {
  console.log(currentMonth);
  return (
    <div className=" w-[400] border border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className="col-span-3">{"aa"}</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {daysofWeek.map((day) => (
          <Cell key={day} className=" text-sm font-bold">
            {day}
          </Cell>
        ))}
      </div>
    </div>
  );
}
