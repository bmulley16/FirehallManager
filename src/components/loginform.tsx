import { SetStateAction, useState } from "react";

function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const [passwordInputValue, setPasswordInputValue] = useState("");

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  return (
    <>
      <form>
        <h1>Welcome! Sign in or up Bellow:</h1>
        <label htmlFor="email-input"> Input your Account Email: </label>
        <input
          type="email"
          id="email-input"
          placeholder="Johnsmith123@gmail.com"
          onChange={handleChangeEmail}
          value={inputValue}
        ></input>

        <label htmlFor="password"> Input your Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChangePassword}
          value={passwordInputValue}
        ></input>
      </form>
    </>
  );
}

export default LoginForm;
