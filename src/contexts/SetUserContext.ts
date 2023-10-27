import { createContext } from "react";
import { User } from "../types";

type SetUser = (user: User | null) => void;

export const SetUserContext = createContext<SetUser>(() => {});
