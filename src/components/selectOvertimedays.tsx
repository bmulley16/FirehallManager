import { DateTime } from "luxon";

export const overTimeDaypicker = () => {
  const SHIFT_LENGTH = 96;
  const PLATOONS = ["A", "B", "C", "D"];
  const currentDateTime = DateTime.now();
  const initialDateTime = DateTime.local(2023, 12, 26, 8, 0o0);

  const elapsedHours = currentDateTime.diff(initialDateTime, ["hour"]).hours;
  console.log(elapsedHours);

  const currentShiftIndex =
    Math.round(SHIFT_LENGTH / elapsedHours) % PLATOONS.length;

  const currentPlatoon = PLATOONS[currentShiftIndex];
  console.log(currentShiftIndex, currentPlatoon);

  const nextShiftStartTime = currentDateTime.plus({
    hours: SHIFT_LENGTH - (elapsedHours % SHIFT_LENGTH),
  });

  // const futureShifts = [];
  // for (let i = 1; i <= NUM_FUTURE_SHIFTS; i++) {
  //   const futureShiftStartTime = nextShiftStartTime.plus({ hours: i * SHIFT_LENGTH });
  //   const futureShiftPlatoon = PLATOONS[(currentShiftIndex + i) % PLATOONS.length];
  //   futureShifts.push({ startTime: futureShiftStartTime, platoon: futureShiftPlatoon });
  // }
};
