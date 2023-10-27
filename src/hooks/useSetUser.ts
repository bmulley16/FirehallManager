import { useContext } from "react";
import { SetUserContext } from "../contexts";

export const useSetUser = () => {
  return useContext(SetUserContext);
};
