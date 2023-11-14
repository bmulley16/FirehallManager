import React from "react";
import { useState } from "react";

import * as api from "../../utils/api";
// import { signIn } from "../utils/api";

import { useNavigate } from "react-router-dom";
import { useSetUser } from "../../hooks";
function LoginForm() {
  const [usernameinputValue, setInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const setUser = useSetUser();

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const navigate = useNavigate();
  const signInVerification = () => {
    const user = api.signIn(usernameinputValue, passwordInputValue);
    console.log("USER", user);
    if (user) {
      setUser(user);
      api.setLoggedInUser(user.id);
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
          onClick={signInVerification}
        >
          Sign In
        </button>
      </div>
    </>
  );
}

export default LoginForm;
