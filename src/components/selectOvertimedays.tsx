import { DateTime } from "luxon";

export const overTimeDaypicker = () => {
  const SHIFT_LENGTH = 96;
  const PLATOONS = ["A", "B", "C", "D"];
  const currentDateTime = DateTime.now();
  const initialDateTime = DateTime.local(2023, 12, 22, 8, 0o0);

  const elapsedHours = currentDateTime.diff(initialDateTime, "hours").hours;

  // Determine the current shift/platoon based on elapsed time
  const currentShiftIndex =
    Math.floor(elapsedHours / SHIFT_LENGTH) % PLATOONS.length;
  const currentPlatoon = PLATOONS[currentShiftIndex];
  console.log(currentShiftIndex, currentPlatoon);
  // Calculate the start time of the next shift for overtime eligibility
  const nextShiftStartTime = currentDateTime.plus({
    hours: SHIFT_LENGTH - (elapsedHours % SHIFT_LENGTH),
  });

  console.log(elapsedHours % SHIFT_LENGTH);

  // Calculate future shifts
  // const futureShifts = [];
  // for (let i = 1; i <= NUM_FUTURE_SHIFTS; i++) {
  //   const futureShiftStartTime = nextShiftStartTime.plus({ hours: i * SHIFT_LENGTH });
  //   const futureShiftPlatoon = PLATOONS[(currentShiftIndex + i) % PLATOONS.length];
  //   futureShifts.push({ startTime: futureShiftStartTime, platoon: futureShiftPlatoon });
  // }

  // Use futureShifts for scheduling and display
};
