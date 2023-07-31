import { Link } from "react-router-dom";
// import {}

function Button() {
  return (
    <Link to="./login">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-2"
      >
        Start Here
      </button>
    </Link>
  );
}

export default Button;
