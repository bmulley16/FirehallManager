interface User {
  username: string;
  password: string;

  // the questionmark makes it optional and the interface applies the subject to the function and is specifies the data type there
  birthday?: string;
}

export function signUp(username: string, password: string): User {
  // [
  //   {
  //     username: "bmulley",
  //     password: "12345",
  //   },
  // ];

  // localStorage.getItem("users");

  // return {
  //   username: "",
  //   password: "",
  // };

  const users = localStorage.get("users");

  const user: User = {
    username: username,
    password: password,
  };

  const newUsers = [...users, user];

  localStorage.setItem("users", JSON.stringify(newUsers));

  return user;
}

// stringify => '{"username": "bob"}'
// parse => {username: "bob"}

export function signIn(username: string, password: string): User | null {
  const users: User[] = JSON.parse(localStorage.get("users"));

  // check for null

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  return user;
}
