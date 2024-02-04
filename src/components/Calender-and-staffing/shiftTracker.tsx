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

  const shiftCallBackOrder = [];  

  shiftCallBackOrder.push(PLATOONS[(currentShiftIndex + PLATOONS.length / 2) % PLATOONS.length]);

  for (let i = 1; i <= 1; i++) {
    const nextShiftIndex = (currentShiftIndex + i) % PLATOONS.length;
    shiftCallBackOrder.push(PLATOONS[nextShiftIndex]);
  }
  
  shiftCallBackOrder.push(PLATOONS[(currentShiftIndex + PLATOONS.length - 1) % PLATOONS.length]);


  





  return {
    currentPlatoon,
    elapsedWithinCycle,
    nextShiftStartTime,
    previousShiftStartTime,
    shiftCallBackOrder,
  };
};




