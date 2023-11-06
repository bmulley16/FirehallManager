import { Link } from "react-router-dom";
import { signIn } from "../utils/api";
import { UserContext } from "../contexts";
import { useContext } from "react";
import { useUser } from "../hooks";
import ProfileButton from "./buttons/profileButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CollapsedNavBar } from "./banners/collapsedNavBar";

export function ProfileAside() {
  const user = useUser();

  return (
    <aside className=" h-full w-1/8">
      <CollapsedNavBar></CollapsedNavBar>
    </aside>
  );
}
