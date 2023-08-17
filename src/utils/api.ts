interface User {
  username: string;
  password: string;

  // the questionmark makes it optional and the interface applies the subject to the function and is specifies the data type there
  birthday?: string;
}

export function signUp(username: string, password: string): User {
  const users = localStorage.getItem("users");

  const user: User = {
    username: username,
    password: password,
  };

  const newUsers = [...[users], user];

  localStorage.setItem("users", JSON.stringify(newUsers));

  return user;
}

// stringify => '{"username": "bob"}'
// parse => {username: "bob"}

export function signIn(username: string, password: string): User | null {
  if (signIn === null) {
  } else {
    const users: User[] = JSON.parse(localStorage.getItem("users"));

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    return user;
  }
}
