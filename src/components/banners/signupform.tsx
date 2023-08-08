const api = "";

import { useState } from "react";

const [usernameinputValue, setInputValue] = useState("");

const [passwordInputValue, setPasswordInputValue] = useState("");

const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPasswordInputValue(event.target.value);
  console.log(passwordInputValue);
};

const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
  console.log(usernameinputValue);
};

function Signup() {
  return (
    <div className="bg-[url('src\\assets\\loginScreenBackground.jpg')] bg-center bg-no-repeat bg-cover max-w-full pt-[50vh] ">
      <div className=" flex-column    ">
        <h1>New Here?</h1>

        <p>
          Sign up and discover how Emergico's framework can benefit your agency!{" "}
        </p>
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
        </form>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
          // onClick={}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
