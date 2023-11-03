import { Link } from "react-router-dom";
import { signIn } from "../../utils/api";
import { UserContext } from "../../contexts";

import { useContext } from "react";
import { useUser } from "../../hooks";
import ProfileButton from "../buttons/profileButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faRandom,
  faCircleUser,
  faShirt,
  faClipboardList,
  faCalendarDays,
  faBook,
  faAddressBook,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export function CollapsedNavBar() {
  const user = useUser();
  const firstInitial = user?.firstName.charAt(0);
  const lastInitial = user?.lastName.charAt(0);
  return (
    <div className="max-w-3/6 min-h-screen bg-grey flex flex-col justify-evenly items-center ">
      <div>
        <FontAwesomeIcon icon={faCircleUser} />
        <h6>
          {firstInitial} {lastInitial}
        </h6>
      </div>
      <ul className="flex flex-col items-center justify-">
        <Link to="/administration">
          <li>
            <FontAwesomeIcon icon={faFolder} />
          </li>
        </Link>
        <Link to="/equipment">
          <li>
            <FontAwesomeIcon icon={faShirt} />
          </li>
        </Link>
        <Link to="/inventories">
          <li>
            <FontAwesomeIcon icon={faClipboardList} />
          </li>
        </Link>
        <Link to="/overtime">
          <li>
            <FontAwesomeIcon icon={faCalendarDays} />
          </li>
        </Link>
        <Link to="/training">
          <li>
            <FontAwesomeIcon icon={faBook} />
          </li>
        </Link>
        <Link to="/mess-managment">
          <li className="flex flex-col text-sm">
            <FontAwesomeIcon icon={faUtensils} />
          </li>
        </Link>
        <Link to="/contacts">
          <li>
            <FontAwesomeIcon icon={faAddressBook} />
          </li>
        </Link>
      </ul>
      <ProfileButton buttontype="submit" buttonText=" Sign Out"></ProfileButton>
    </div>
  );
}

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
//             <MenuItem name="equip" route="/equip" /> */}

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
