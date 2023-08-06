import { useState } from "react";
import * as api from "../utils/api";
import LoginSubmitButton from "./banners/loginButton";
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
      <div className="grow m-auto ">
        <h1 className="font-mono text-[40px] font-extrabold ">
          {" "}
          Login to Your Account{" "}
        </h1>
        <form className="flex-column">
          <input
            type="email"
            id="email-input"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={usernameinputValue}
          ></input>

          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={passwordInputValue}
          ></input>

          <LoginSubmitButton></LoginSubmitButton>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
