import { useState } from "react";
import * as api from "../utils/api";

function LoginForm() {
  const [usernameinputValue, setInputValue] = useState("");

  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log(usernameinputValue);
  console.log(passwordInputValue);

  const user = api.signIn(usernameinputValue, passwordInputValue);

  if (user) {
    // do somethign with user
  }

  // if not exists, then its invalid (wrong password, no user, etc)

  return (
    <>
      <form className=" flex-column ">
        <div>
          <label htmlFor="email-input"> Input your Account Email: </label>
          <input
            type="email"
            id="email-input"
            placeholder="Johnsmith123@gmail.com"
            onChange={handleChangeEmail}
            value={usernameinputValue}
          ></input>
        </div>
        <div>
          <label htmlFor="password"> Input your Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={passwordInputValue}
          ></input>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
