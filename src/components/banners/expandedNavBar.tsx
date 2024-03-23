import { Link } from "react-router-dom";
import { signIn } from "../../utils/api";
import { UserContext } from "../../contexts";
import { CollspsedNavBarIconComponent } from "../collapsednavBarIconComponent";
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

export function ExpandedNavBar() {
  const user = useUser();
 const firstName = user?.firstName
 const lastName = user?.lastName
  return (
    <div className=" min-h-screen w-full bg-grey flex flex-col justify-evenly items-center bg-gray-900 text-white ">
      <div className="flex flex-col justify-between items-center">
        <FontAwesomeIcon
          icon={faCircleUser}
          size="2xl"
          className=" Hover:shadow-lg"
        />
        <h6>
          {firstName} {''} {lastName}
        </h6>
      </div>
      <ul className="flex flex-col items-center justify-evenly h-96 min-w-full">
        <CollspsedNavBarIconComponent
          path="/administration"
          icon={faFolder}
        ></CollspsedNavBarIconComponent>
        
        <CollspsedNavBarIconComponent
          path="/equipment"
          icon={faShirt}
        ></CollspsedNavBarIconComponent>
        <CollspsedNavBarIconComponent
          path="/inventories"
          icon={faClipboardList}
        ></CollspsedNavBarIconComponent>
        <CollspsedNavBarIconComponent
          path="/overtime"
          icon={faCalendarDays}
        ></CollspsedNavBarIconComponent>
        <CollspsedNavBarIconComponent
          path="/training"
          icon={faBook}
        ></CollspsedNavBarIconComponent>
        <CollspsedNavBarIconComponent
          path="/mess-managment"
          icon={faUtensils}
        ></CollspsedNavBarIconComponent>
        <CollspsedNavBarIconComponent
          path="/contacts"
          icon={faAddressBook}
        ></CollspsedNavBarIconComponent>
      </ul>
      <ProfileButton buttontype="submit" buttonText=" Sign Out"></ProfileButton>
    </div>
  );
}
