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

import { Link } from "react-router-dom";

export function CollspsedNavBarIconComponent(props: any) {
  return (
    <li className="nav-link hover:bg-gray-700 w-full flex items-center justify-center">
      <Link to={props.path}>
        <FontAwesomeIcon icon={props.icon} size="2xl" />
      </Link>
    </li>
  );
}
