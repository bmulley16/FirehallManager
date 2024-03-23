import { useSetUser } from "../../hooks";
import { ProfileButtonProps } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import * as api from "../../utils/api";

function ProfileButton(props: ProfileButtonProps) {
  const setUser = useSetUser();
  const navigate = useNavigate();

  const onClick = () => {
    // Clear context
    setUser(null);

    // Clear logged in user from local storage
    api.setLoggedInUser(null);

    // Navigate back to login
    navigate("/login");
  };

  return (
    <>
      <Link to="/login">
        <button
          type={props.buttontype}
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-1 px-2 rounded mt-10 mb-2 w-20 h-10"
          onClick={onClick}
        >
          {props.buttonText}
        </button>
      </Link>
    </>
  );
}

export default ProfileButton;
