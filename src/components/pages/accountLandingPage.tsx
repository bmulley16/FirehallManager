import { Link } from "react-router-dom";

const AccountLandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('/firehallmanager/images/fire-trucks-down-center-of-road(accountlandingpage).jpg')",
      }}
    >
      <div className="max-w-md w-full bg-white shadow p-6 rounded-lg bg-opacity-75">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800">
          Welcome to Your Account
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your profile, settings, and more.
        </p>
        <Link
          to="/profile"
          className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Go to Your Profile
        </Link>
      </div>
    </div>
  );
};

export default AccountLandingPage;
