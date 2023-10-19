import { Link } from "react-router-dom";
import { signIn } from "../utils/api";

export function ProfileAside() {
  return (
    <aside className=" my-4 ml-2 rounded-md w-60 shadow   min-h-screen p-0 text-center flex flex-col  content-center bg-gray-900 space-x-4 text-white ">
      <div>
        <img
          className="h-32 wn-32 rounded-full mx-auto mt-5 "
          src="src\assets\Emergico-Logo.jpg"
          alt="Comany Logo"
        />
        <h1 className=" mt-10">
          <span className="text-4xl underline decoration-inherit ">
            Welcome
          </span>
          <br />
          <br />
          <br />
          <span className=" text-2xl">Bryce Mulley</span>
        </h1>
      </div>

      <div className="my-auto mx-auto">
        <ul className=" h-full w-full flex flex-col text-left justify-evenly">
          <Link to="/administration">
            <li className=" hover:font-bold hover:bg-slate-600">
              Administration
            </li>
          </Link>
          {/* 
          <MenuItem name="equip" route="/equip" /> */}

          <Link to="/equipment">
            <li className=" hover:font-bold hover:bg-slate-600">Equipment</li>
          </Link>

          <Link to="/inventories">
            <li className=" hover:font-bold hover:bg-slate-600">Inventories</li>
          </Link>

          <Link to="/overtime">
            <li className=" hover:font-bold hover:bg-slate-600">Staffing</li>
          </Link>
          <Link to="/training">
            <li className=" hover:font-bold hover:bg-slate-600">Training</li>
          </Link>
          <Link to="/mess-managment">
            <li className=" hover:font-bold hover:bg-slate-600">
              Mess Managment
            </li>
          </Link>

          <li className=" hover:font-bold hover:bg-slate-600">
            District Notifications
          </li>

          <Link to="/contacts">
            <li className=" hover:font-bold hover:bg-slate-600">Contacts</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}

// function menuItem() {
//   <Link to="/equipment">
//   <li className=" hover:font-bold hover:bg-slate-600">Equipment</li>
// </Link>
// }
