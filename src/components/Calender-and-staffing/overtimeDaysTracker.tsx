import { DateTime } from "luxon";
const currentDateTime = DateTime.now(); 
const SHIFT_LENGTH = 96;
  const PLATOONS = ["A", "B", "C", "D"];
/**

 * 2. Return an object that contains the shift info
 *    - Current platoon
 *    - Elapsed hours within cycle
 *    - Next shift start time
 * 3. Move any constant variables to the top of the file
 */

export const shiftTracker = (currentDateTime:any) => {
  
 
  const initialDateTime = DateTime.local(2024, 1, 0o3, 8, 0o0);

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

  const previousShiftStartTime = currentDateTime.minus({
    hours: elapsedHours % SHIFT_LENGTH,
  });


  return {
    currentPlatoon,
    elapsedWithinCycle,
    nextShiftStartTime,
    previousShiftStartTime
  };
};
