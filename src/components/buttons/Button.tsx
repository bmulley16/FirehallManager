import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/login">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mt-4 focus:outline-none focus:ring focus:ring-blue-200">
        Get Started
      </button>
    </Link>
  );
}

export default Button;
