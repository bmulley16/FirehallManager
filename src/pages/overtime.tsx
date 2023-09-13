// @ts-ignore
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

export function OvertimePage() {
  const calenders = [{ id: "cal1", name: "SJRFD Schedule" }];

  const initialEvents = [
    {
      id: "1",
      calendarId: "cal1",
      title: "A-Platoon",
      category: "scheduling",
      start: "2022-06-28T12:00:00",
      end: "2022-06-28T13:30:00",
    },
    {
      id: "2",
      calendarId: "cal1",
      title: "B-Platoon",
      category: "scheduling",
      start: "2022-06-28T15:00:00",
      end: "2022-06-28T15:30:00",
    },
    {
      id: "2",
      calendarId: "cal1",
      title: "C-Platoon",
      category: "scheduling",
      start: "2022-06-28T15:00:00",
      end: "2022-06-28T15:30:00",
    },
    {
      id: "2",
      calendarId: "cal1",
      title: "D-Platoon",
      category: "scheduling",
      start: "2022-06-28T15:00:00",
      end: "2022-06-28T15:30:00",
    },
  ];

  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  const initialStartTime = new Date();
  const initialEndTime = new Date();

  initialStartTime.setHours(8, 0, 0, 0);
  initialEndTime.setHours(8, 0, 0, 0);
  const numberOfEvents = 4;

  for (let i = 0; i < numberOfEvents; i++) {
    const startTime = new Date(initialStartTime);
    const endTime = new Date(initialEndTime);

    startTime.setDate(initialStartTime.getDate() + i * 4);
    endTime.setDate(initialEndTime.getDate() + i * 4);

    initialEvents.push({
      id: `event${i + 1}`,
      calendarId: "cal1",
      title: `Platoon ${String.fromCharCode(65 + i)}`,
      category: "scheduling",
      start: startTime.toISOString(),
      end: endTime.toISOString(),
    });
  }

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  return (
    <div>
      <Calendar
        usageStatistics={false}
        view="month"
        schedules={initialEvents}
        onAfterRenderEvent={onAfterRenderEvent}
        eventFilter={(event) => {
          const startDate = new Date(event.start);

          const daysDifference = Math.floor(
            (startDate - currentDate) / (24 * 60 * 60 * 1000)
          );

          return daysDifference % 4 === 0;
        }}
      />
    </div>
  );
}
