import { useState } from "react";
import * as api from "../utils/api";
import LoginSubmitButton from "./banners/loginButton";
import { AccountLoginPage } from "./pages/accountLandingPage";
function LoginForm() {
  const [usernameinputValue, setInputValue] = useState("");

  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const user = api.signIn(usernameinputValue, passwordInputValue);

  if (user) {
    <AccountLoginPage></AccountLoginPage>;
  } else {
  }

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
