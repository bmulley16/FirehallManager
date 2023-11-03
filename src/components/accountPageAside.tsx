import { Link } from "react-router-dom";
import { signIn } from "../utils/api";
import { UserContext } from "../contexts";
import { useContext } from "react";
import { useUser } from "../hooks";
import ProfileButton from "./buttons/profileButton";
// export function ProfileAside() {
//   const user = useUser();

//   return (
//     <aside className=" my-4 ml-2 rounded-md w-60 shadow   min-h-screen p-0 text-center flex flex-col  content-center bg-gray-900 space-x-4 text-white ">
//       <div>
//         <img
//           className="h-32 wn-32 rounded-full mx-auto mt-5 "
//           src="src\assets\Emergico-Logo.jpg"
//           alt="Comany Logo"
//         />
//         <h1 className=" mt-10">
//           <span className="text-4xl underline decoration-inherit ">
//             Welcome
//           </span>
//           <br />
//           <br />
//           <br />
//           <span className=" text-2xl">
//             {user?.firstName} {user?.lastName}
//           </span>
//         </h1>
//       </div>

//       <div className="my-auto mx-auto">
//         <ul className=" h-full w-full flex flex-col text-left justify-evenly">
//           <Link to="/administration">
//             <li className=" hover:font-bold hover:bg-slate-600">
//               Administration
//             </li>
//           </Link>
//           {/*
//           <MenuItem name="equip" route="/equip" /> */}

//           <Link to="/equipment">
//             <li className=" hover:font-bold hover:bg-slate-600">Equipment</li>
//           </Link>

//           <Link to="/inventories">
//             <li className=" hover:font-bold hover:bg-slate-600">Inventories</li>
//           </Link>

//           <Link to="/overtime">
//             <li className=" hover:font-bold hover:bg-slate-600">Staffing</li>
//           </Link>
//           <Link to="/training">
//             <li className=" hover:font-bold hover:bg-slate-600">Training</li>
//           </Link>
//           <Link to="/mess-managment">
//             <li className=" hover:font-bold hover:bg-slate-600">
//               Mess Managment
//             </li>
//           </Link>

//           <li className=" hover:font-bold hover:bg-slate-600">
//             District Notifications
//           </li>

//           <Link to="/contacts">
//             <li className=" hover:font-bold hover:bg-slate-600">Contacts</li>
//           </Link>
//         </ul>
//       </div>
//       <ProfileButton buttontype="submit" buttonText="Sign Out"></ProfileButton>
//     </aside>
//   );
// }

export const ProfileAside = () => {
  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <div className="bg-gray-900 w-16 flex flex-col items-center">
        <img
          src="/your-logo.png" // Replace with your logo image
          alt="Logo"
          className="mt-4 mb-6 w-10 h-10"
        />
        <Link
          to="/administration"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-cogs"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <Link
          to="/equipment"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-wrench"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <Link
          to="/inventories"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-box"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <Link
          to="/staffing"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-users"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <Link
          to="/training"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-graduation-cap"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <Link
          to="/mess-management"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-utensils"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
        <div className="text-white hover:bg-gray-700 p-2 rounded-full mb-4">
          District Notifications
        </div>
        <Link
          to="/contacts"
          className="text-white hover:bg-gray-700 p-2 rounded-full mb-4"
        >
          <i className="fas fa-address-book"></i>{" "}
          {/* Replace with an appropriate icon */}
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {/* Top Navbar */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Your App</h1>
          <div className="flex items-center">
            <img
              src="/user-avatar.jpg" // Replace with the user's avatar image
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="text-white">John Doe</p>{" "}
            {/* Replace with the user's name */}
          </div>
        </div>

        {/* Content goes here */}
        <div className="mt-4">{/* Your page content */}</div>
      </div>
    </div>
  );
};
