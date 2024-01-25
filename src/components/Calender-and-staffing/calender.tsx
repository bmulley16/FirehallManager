import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import Cell from "./cell";
import { useState } from "react";
import DailyOnClickComponent from "../../pages/dailyRenderedCalenderInterface";
import { link } from "fs";
import { useNavigate } from "react-router-dom";
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

  const [platoonColorRender, setPlatoonColorRender] = useState("");
  const daysofWeekCells = daysofWeek.map((day) => <Cell key={day}>{day}</Cell>);

  const daysInMonth = currentDatetime.daysInMonth;
  const renderDaysInMonth = () => {
    const navigate = useNavigate();
    const shiftColors = [
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400",
      "bg-red-400",
    ];
    if (daysInMonth !== undefined) {
      const cells = [];
      // fix the i = 1 to the difference in time
      for (let i = 1; i <= daysInMonth; i++) {
        
        // add iterator ontop of the first of month maths
        const shiftIndex = i % 4;
        const color = shiftColors[shiftIndex];
        cells.push(
          <Link to={`/overtime/daily-overview`}>
            <Cell
              className={`hover:font-bold ${color}`}
              onClick={() => setSelectedDay(i)}
              key={i}
            >
              {i}
            </Cell>
          </Link>
        );
      }

      return cells;
    }
  };

  return (
    <div className=" w-full h-full border border-t border-l">
      <div className=" h-full grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={() => goBackMonths(2)}>
          {
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
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          }
        </Cell>
        <Cell onClick={() => goBackMonths(1)}>
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Cell>
        <Cell className={"col-span-3"}>
          {currentDatetime.toLocaleString({ month: "long" })}
        </Cell>
        <Cell onClick={() => goForwardMonths(1)}>
          {
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        </Cell>
        <Cell onClick={() => goForwardMonths(2)}>
          {
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
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          }
        </Cell>

        {daysofWeekCells}
        {renderDaysInMonth()}
      </div>
    </div>
  );
}
