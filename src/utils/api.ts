import { User } from "../types";
import { UserId } from "../types";
//@ts-ignore
import { v4 as uuid } from "uuid";
import { shiftTracker } from "../components/Calender-and-staffing/shiftTracker";
import { DateTime } from "luxon";


const CurrentDAteTime = DateTime.now()
console.log(CurrentDAteTime)
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
  const storedEmployeeNames = JSON.parse(localStorage.getItem("users") ?? "[]") as User[];

  return storedEmployeeNames;
}

export function updateUser(user: User) {
  const employees = getEmployees();

  const userIdx = employees.findIndex((employee) => employee.id === user.id);

  if (userIdx === -1) return;

  employees[userIdx] = user;

  localStorage.setItem("users", JSON.stringify(employees));
}




const OvertimeLogic = () => {

const shiftUtils = shiftTracker(CurrentDAteTime);
console.log(shiftUtils)

const callbackOrder =  shiftUtils.shiftCallBackOrder
console.log(callbackOrder)

  const APlatoon = getEmployees()
    .filter((empl) => empl.platoon === "A")
    .filter((em) => em.overtime);
  const BPlatoon = getEmployees()
    .filter((empl) => empl.platoon === "B")
    .filter((em) => em.overtime);
  const CPlatoon = getEmployees()
    .filter((empl) => empl.platoon === "C")
    .filter((em) => em.overtime);
  const dPlatoon = getEmployees()
    .filter((empl) => empl.platoon === "D")
    .filter((em) => em.overtime);

  /**
   * - Get next eligble platoon
   * - Sort
   * - Find the last called person in that platoon
   * - Start looping from lastCalled + 1, until we arrive at lastCalled
   * - If no one is found, repeat with next eliglbe platoon
   */

// let lastCalled = dPlatoon.filter((empl) => empl.lastCalled === true);


//   const employeeNames = dPlatoon.map((empl) => empl.firstName + " " + empl.lastName);



//   const alphabeticallySorted = employeeNames.sort();



// let numToFulfilled = 2

// while (numToFulfilled !== 0) {

  
// }
}

OvertimeLogic();

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