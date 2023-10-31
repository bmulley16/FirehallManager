import { ProfileButtonProps } from "../types";
import { Link } from "react-router-dom";
function ProfileButton(props: ProfileButtonProps) {
  return (
    <>
      <Link to="/login">
        <button
          type={props.buttontype}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
        >
          {props.buttonText}
        </button>
      </Link>
    </>
  );
}

export default ProfileButton;
