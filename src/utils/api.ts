interface User {
  username: string;
  password: string;

  // the questionmark makes it optional and the interface applies the subject to the function and is specifies the data type there
  birthday?: string;
}

export function signUp(username: string, password: string): User {
  const users = localStorage.getItem("users");
  const parsedUsers: User[] = users ? JSON.parse(users) : [];

  const user: User = {
    username: username,
    password: password,
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
