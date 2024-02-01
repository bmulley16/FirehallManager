import { DateTime } from "luxon";

const SHIFT_LENGTH = 96;
const PLATOONS = ["A", "B", "C", "D"];
const currentDateTime = DateTime.now();

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

  const shiftOrder = [];
  for (let i = 0; i < PLATOONS.length/4; i++) {
    const oppositeIndex = (i + PLATOONS.length / 2) % PLATOONS.length;
    console.log("Opposite Index:", oppositeIndex);
    shiftOrder.push(PLATOONS[oppositeIndex], PLATOONS[oppositeIndex + 1], PLATOONS[oppositeIndex - 1]);
  }

  console.log("Shift Order:", shiftOrder);

  return {
    currentPlatoon,
    elapsedWithinCycle,
    nextShiftStartTime,
    previousShiftStartTime,
    shiftOrder,
  };
};

const trackedShift = shiftTracker(currentDateTime);



const callbackShifts = trackedShift.shiftOrder;
console.log("Callback Shifts Order:", callbackShifts);

for (const shift of callbackShifts) {
  console.log("Calling shift:", shift);
}

const testShift = shiftTracker(DateTime.local(2024, 2, 1, 8, 0));

console.log(testShift);
