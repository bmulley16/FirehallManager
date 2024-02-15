import { User } from "../types";
import { UserId } from "../types";
//@ts-ignore
import { v4 as uuid } from "uuid";

import { DateTime } from "luxon";

const CurrentDAteTime = DateTime.now();
console.log(CurrentDAteTime);
//TODO update parameter to take a User object
export function signUp({
  username,
  password,
  firstName,
  lastName,
  phone,
  employeeNumber,
  overtime,
  nightShift,
  fourHourCallBack,
  dayShift,
  emergencyCallback,

  platoon,
}: User): User {
  const users = localStorage.getItem("users");
  const parsedUsers: User[] = users ? JSON.parse(users) : [];

  const user: User = {
    id: uuid(),
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    employeeNumber: employeeNumber,
    overtime: overtime,
    nightShift: nightShift,
    fourHourCallBack,
    dayShift,
    emergencyCallback,
    platoon: platoon,
    firstToBeCalled: false,
  };

  const newUsers = [...parsedUsers, user];

  localStorage.setItem("users", JSON.stringify(newUsers));

  return user;
}

// stringify => '{"username": "bob"}'
// parse => {username: "bob"}

export function signIn(username: string, password: string): User | null {
  const nullCheck = localStorage.getItem("users");

  if (nullCheck === null) {
    return null;
  } else {
    const users: User[] = JSON.parse(nullCheck);

    const user: User | undefined = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      return user;
    } else {
      return null;
    }
  }
}

export function setLoggedInUser(id: User["id"] | null) {
  if (id) {
    localStorage.setItem("loggedInUser", id);
  } else {
    localStorage.removeItem("loggedInUser");
  }
}

export function getLoggedInUser(): User | null {
  const loggedInUserId = localStorage.getItem("loggedInUser");
  const users = localStorage.getItem("users");

  if (users === null) {
    return null;
  } else {
    const usersArray: User[] = JSON.parse(users);
    const user = usersArray.find((user) => user.id === loggedInUserId);
    return user ? user : null;
  }
}

// dwf891-bjdsuw-128dka-Pdui19
// uuid

export function getEmployees(): User[] {
  const storedEmployeeNames = JSON.parse(
    localStorage.getItem("users") ?? "[]"
  ) as User[];

  return storedEmployeeNames;
}

export function updateUser(user: User) {
  const employees = getEmployees();

  const userIdx = employees.findIndex((employee) => employee.id === user.id);

  if (userIdx === -1) return;

  employees[userIdx] = user;

  localStorage.setItem("users", JSON.stringify(employees));
}

export const OvertimeLogic = (overtimeType: string): User[] => {
  const shiftUtils = shiftTracker();
  console.log(shiftUtils);

  const firstShift = shiftUtils.shiftCallBackOrder[0];
  console.log(firstShift);
  const secondShift = shiftUtils.shiftCallBackOrder[1];
  console.log(secondShift);
  const thirdShift = shiftUtils.shiftCallBackOrder[2];
  console.log(thirdShift);


  const platoonRendering = (shiftindex:string) => {
    const platoon = getEmployees().filter(
      (e) => e.platoon === shiftindex && e.overtime
    );

    platoon.sort((a, b) => a.lastName.localeCompare(b.lastName));

    const firstToBeCalledIdx = platoon.findIndex((e) => e.firstToBeCalled);

    const splicedItems = platoon.splice(
      firstToBeCalledIdx,
      platoon.length - firstToBeCalledIdx - 1
    );
    platoon.unshift(...splicedItems);

    return platoon;
  };

return(platoonRendering(firstShift),
platoonRendering(secondShift),
platoonRendering(thirdShift))

};

const shiftTracker = (currentDateTime = DateTime.now()) => {
  const SHIFT_LENGTH = 96;
  const PLATOONS = ["A", "B", "C", "D"];
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

  shiftCallBackOrder.push(
    PLATOONS[(currentShiftIndex + PLATOONS.length / 2) % PLATOONS.length]
  );

  for (let i = 1; i <= 1; i++) {
    const nextShiftIndex = (currentShiftIndex + i) % PLATOONS.length;
    shiftCallBackOrder.push(PLATOONS[nextShiftIndex]);
  }

  shiftCallBackOrder.push(
    PLATOONS[(currentShiftIndex + PLATOONS.length - 1) % PLATOONS.length]
  );

  return {
    currentPlatoon,
    elapsedWithinCycle,
    nextShiftStartTime,
    previousShiftStartTime,
    shiftCallBackOrder,
  };
};






/**
 * - Get next eligble platoon
 * - Sort
 * - Find the last called person in that platoon
 * - Start looping from lastCalled + 1, until we arrive at lastCalled
 * - If no one is found, repeat with next eliglbe platoon
 * fix the first to be called to be off of the user object
 */

// let lastCalled = dPlatoon.filter((empl) => empl.lastCalled === true);

//   const employeeNames = dPlatoon.map((empl) => empl.firstName + " " + empl.lastName);

//   const alphabeticallySorted = employeeNames.sort();

// let numToFulfilled = 2

// while (numToFulfilled !== 0) {

// }



/**
 * Getting last called person, and shifting array to being looping at item 0
 */
// const employees: string[] = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e'
// ]
// const lastCalled = 2

// const splicedItems = employees.splice(lastCalled, employees.length - lastCalled - 1)
// employees.unshift(...splicedItems);

// employees.forEach(emp => console.log(emp))
