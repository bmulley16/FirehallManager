import LoginForm from "../components/loginform";
import Signup from "../components/banners/signupform";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md text-center">
        <LoginForm />

        <div className="mt-6">
          <h1 className="text-2xl text-blue-600 font-semibold mb-4">
            New Here? Sign up!
          </h1>
          <Link to="/signup">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
