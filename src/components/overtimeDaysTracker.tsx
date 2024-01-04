import { DateTime } from "luxon";

export const shiftTracker = () => {
  const SHIFT_LENGTH = 96;
  const PLATOONS = ["A", "B", "C", "D"];
  const currentDateTime = DateTime.now();
  const initialDateTime = DateTime.local(2024, 1, 3, 8);

  const elapsedHours = currentDateTime.diff(initialDateTime, ["hour"]).hours;
  const elapsedWithinCycle = elapsedHours % SHIFT_LENGTH;
  console.log(elapsedHours);

  const currentShiftIndex = Math.floor(
    elapsedWithinCycle / (SHIFT_LENGTH / PLATOONS.length)
  );

  const currentPlatoon = PLATOONS[currentShiftIndex];
  console.log(currentShiftIndex, currentPlatoon);

  const nextShiftStartTime = currentDateTime.plus({
    hours: SHIFT_LENGTH - (elapsedHours % SHIFT_LENGTH),
  });
};
