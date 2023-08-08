interface User {
  username: string;
  password: string;

  // the questionmark makes it optional and the interface applies the subject to the function and is specifies the data type there
  birthday?: string;
}

export function signIn(username: string, password: string): User | null {
  [
    {
      username: "bmulley",
      password: "12345",
    },
  ];

  localStorage.getItem("users");

  return {
    username: "",
    password: "",
  };
}
