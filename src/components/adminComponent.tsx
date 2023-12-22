import * as api from "../utils/api";
import { useUser } from "../hooks";
import { useSetUser } from "../hooks";
export function AdminComponent() {
  const user = useUser();
  const setUser = useSetUser();

  const setOvertimeBtn = () => {
    console.log("user: ", user);
    if (!user) {
      return;
    }

    console.log("overtime?: ", user.overtime);

    setUser({
      ...user,
      overtime: !user.overtime,
    });
  };
  return (
    <div className=" w-72 h-72 bg-white flex flex-col items-center">
      <h1 className="font-bold">Overtime Toggle Button </h1>
      <button
        className=" font-bold w-60 h-11 bg-black text-white"
        type="submit"
        onClick={setOvertimeBtn}
      >
        {" "}
        Overtime Opt In{" "}
      </button>
    </div>
  );
}
