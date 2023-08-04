interface User {
  username: string;
  password: string;
  birthday?: string;
}

export function signIn(username: string, password: string): User | null {
  //do something
  // IRL http request to backend
  // [{username: 'bob', password: '1234'}, ...]
  localStorage.getItem("users");

  return {
    username: "",
    password: "",
  };
}
