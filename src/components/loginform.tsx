import React from "react";

import { useState } from "react";
import * as api from "../utils/api";
import { signIn } from "../utils/api";
import { AccountLoginPage } from "./pages/accountLandingPage";
import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const signInVerification = () => {
    if (user) {
      navigate("/account");
    } else {
      alert("User does not exist");
    }
  };

  return (
    <>
      <div className="grow m-auto ">
        <h1 className="font-mono text-[40px] font-extrabold ">
          {" "}
          Login to Your Account{" "}
        </h1>
        <form className="flex-column" onSubmit={signInVerification}>
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

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
