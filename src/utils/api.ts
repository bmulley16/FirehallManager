import { User } from "../types";
import { UserId } from "../types";

//TODO update parameter to take a User object
export function signUp({
  username,
  password,
  firstName,
  lastName,
  phone,
  id,
  employeeNumber,
}: User): User {
  const users = localStorage.getItem("users");
  const parsedUsers: User[] = users ? JSON.parse(users) : [];

  const user: User = {
    id: "",
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    phone: "",
    employeeNumber: 0,
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

  // const lsUsers = localStorage.getItem('users');

  // if (!lsUsers) {
  //   return null
  // }

  // const users: User[] = JSON.parse(lsUsers);

  // const user: User | undefined = users.find(
  //   (user) => user.username === username && user.password === password
  // );

  // return user ? user : null
}

// dwf891-bjdsuw-128dka-Pdui19
// uuid

export function getEmployees(): User[] {
  const storedEmployeeNames = JSON.parse(
    localStorage.getItem("employeeNames") ?? "[]"
  );

  return storedEmployeeNames;
}

// SERVER
// function onRequest(request) {
//   const method = request.httpMethod;
//   const path = request.path;
//   const params = request.params;

//   if (path === "/announcements") {
//     if (method === "GET") {
//       return getAllAnnouncements(params);
//     }
//   }
// }

// function getAllAnnouncements() {
//   const results = db.get("people");

//   return results;
// }

// /*
// ANNOUNCEMENTS
// - id: 1, date: today, text: hello
// - id: 2, date: yesterday, text: world

// USERS
//  - blah

// */

// // locally, results.filter()
// // backend, dbResults.filter(), GET /announcements?startDate=today&endDate=yesterday
// // database, SELECT * FROM ANNOUNCEMENTS WHERE DATE <= yesterday

// // add announcement "today was a good day"
