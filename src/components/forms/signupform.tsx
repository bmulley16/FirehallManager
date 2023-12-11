import { useState } from "react";
import * as api from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../types";
import { useSetUser } from "../../hooks";
function Signup() {
  const [usernameinputValue, setInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [FirstNameInputValue, setFirstNameInputValue] = useState("");
  const [LastNameInputValue, setLastNameInputValue] = useState("");
  const [employeeNumberInputValue, setEmployeeNumberInputValue] = useState("");
  const [platoonSchedule, setPlatoonSchedule] = useState("");

  const setUser = useSetUser();
  const navigate = useNavigate();

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleChangeFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstNameInputValue(event.target.value);
  };
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameInputValue(event.target.value);
  };

  const handleChangeEmployeeNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmployeeNumberInputValue(event.target.value);
  };
  const handlePlatoonSchedule = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlatoonSchedule(event.target.value);
  };

  const createdAccounts = function storingCreatedAccounts() {
    localStorage.setItem(
      "users",
      JSON.stringify({
        username: usernameinputValue,
        password: passwordInputValue,
        id: " ",
        firstname: FirstNameInputValue,
        lastname: LastNameInputValue,
      })
    );
  };

  const newUser: User = {
    id: "",
    username: usernameinputValue,
    password: passwordInputValue,
    firstName: FirstNameInputValue,
    lastName: LastNameInputValue,
    phone: "",
    employeeNumber: 0,
    overtime: true,
    platoon: "",
  };

  const handleButtonClick = () => {
    const user = api.signUp(newUser);

    // Set the user context
    setUser(user);

    // Set the current logged in user in local storage
    api.setLoggedInUser(user.id);

    // Redirect to the dashboard
    navigate("/account");
  };

  return (
    <div className="bg-[url('src\\assets\\loginScreenBackground.jpg')] bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-96">
        <h1 className="text-3xl text-center text-blue-500 font-semibold mb-4 py-2 px-4 rounded-lg">
          Sign Up
        </h1>
        <form className="flex flex-col" onSubmit={createdAccounts}>
          <input
            type="email"
            id="email-input"
            placeholder="Email"
            onChange={handleChangeEmail}
            value={usernameinputValue}
            className="input"
          />
          <input
            type="text"
            id="first-name"
            onChange={handleChangeFirstName}
            placeholder="First Name"
            className="input"
          />
          <input
            type="text"
            id="last-name"
            onChange={handleChangeLastName}
            placeholder="Last Name"
            className="input"
          />
          <input
            type="text"
            id="employee-number"
            onChange={handleChangeEmployeeNumber}
            placeholder="Employee Nuber"
            className="input"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={passwordInputValue}
            className="input"
          />

          <button
            type="submit"
            className="hover:bg-blue-500  hover:shadow-lg"
            onClick={handleButtonClick}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
