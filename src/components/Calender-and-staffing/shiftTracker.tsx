// import { DateTime } from "luxon";
// const currentDateTime = DateTime.now(); 
// const SHIFT_LENGTH = 96;
//   const PLATOONS = ["A", "B", "C", "D"];


// export const shiftTracker = (currentDateTime:any) => {
  
 
//   const initialDateTime = DateTime.local(2024, 1, 0o3, 8, 0o0);

//   const elapsedHours = currentDateTime.diff(initialDateTime, ["hour"]).hours;
//   const elapsedWithinCycle = elapsedHours % SHIFT_LENGTH;
//   console.log(elapsedHours);

//   const currentShiftIndex = Math.floor(
//     elapsedWithinCycle / (SHIFT_LENGTH / PLATOONS.length)
//   );

//   const currentPlatoon = PLATOONS[currentShiftIndex];
//   console.log(currentShiftIndex, currentPlatoon);

//   const nextShiftStartTime = currentDateTime.plus({
//     hours: SHIFT_LENGTH - (elapsedHours % SHIFT_LENGTH),
//   });

//   const previousShiftStartTime = currentDateTime.minus({
//     hours: elapsedHours % SHIFT_LENGTH,
//   });


//   return {
//     currentPlatoon,
//     elapsedWithinCycle,
//     nextShiftStartTime,
//     previousShiftStartTime
//   };
// };

import { DateTime } from "luxon";

const SHIFT_LENGTH = 96;
const PLATOONS = ["A", "B", "C", "D"];

export const shiftTracker = (currentDateTime: any) => {
  const initialDateTime = DateTime.local(2024, 1, 3, 8, 0);

  const elapsedHours = currentDateTime.diff(initialDateTime, ["hour"]).hours;
  const elapsedWithinCycle = elapsedHours % SHIFT_LENGTH;

  const currentShiftIndex = Math.floor(
    elapsedWithinCycle / (SHIFT_LENGTH / PLATOONS.length)
  );

  const currentPlatoon = PLATOONS[currentShiftIndex];

  const nextShiftStartTime = currentDateTime.plus({
    hours: SHIFT_LENGTH - (elapsedHours % SHIFT_LENGTH),
  });

  const previousShiftStartTime = currentDateTime.minus({
    hours: elapsedHours % SHIFT_LENGTH,
  });

  // Calculate the order of shifts for callback
  const shiftOrder = [];
  for (let i = 0; i < PLATOONS.length; i++) {
    const oppositeIndex = (currentShiftIndex + PLATOONS.length / 2) % PLATOONS.length;
    const nextIndex = (currentShiftIndex + i) % PLATOONS.length;
    shiftOrder.push(PLATOONS[oppositeIndex], PLATOONS[nextIndex]);
  }

  return {
    currentPlatoon,
    elapsedWithinCycle,
    nextShiftStartTime,
    previousShiftStartTime,
    shiftOrder,
  };
};

const currentDateTime = DateTime.now();
const trackedShift = shiftTracker(currentDateTime);

console.log(trackedShift);

const callbackShifts = trackedShift.shiftOrder;
console.log("Callback Shifts Order:", callbackShifts);

for (const shift of callbackShifts) {
  console.log("Calling shift:", shift);
}
