import * as api from "../utils/api";
import { useUser } from "../hooks";
import { useSetUser } from "../hooks";
import { shiftTracker } from "./overtimeDaysTracker";
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

  const setOvertimeNightShiftOption = () => {
    if (user?.overtime === true) {
      setUser({ ...user, nightShift: !user.nightShift });
    }
  };
  const setOvertimeDayShiftOption = () => {
    if (user?.overtime === true) {
      setUser({ ...user, dayShift: !user.dayShift });
    }
  };
  const setOvertimeEmergencyCallBackOption = () => {
    if (user?.overtime === true) {
      setUser({ ...user, emergencyCallback: !user.emergencyCallback });
    }
  };
  const setOvertimeFourHourCallBAckOption = () => {
    if (user?.overtime === true) {
      setUser({ ...user, fourHourCallBack: !user.fourHourCallBack });
    }
  };
  const setOvertimeEverything = () => {
    if (user?.overtime === true) {
      setUser({
        ...user,
        fourHourCallBack: true,
        emergencyCallback: true,
        dayShift: true,
        nightShift: true,
      });
    }
  };

  return (
    <div className=" w-72 h-100 bg-white flex flex-col items-center">
      <h1 className="font-bold">Overtime Toggle Button </h1>
      <div>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeEverything}
        >
          All the Overtime
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeNightShiftOption}
        >
          Nights Only
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeBtn}
        >
          {" "}
          Overtime Opt In{" "}
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={shiftTracker}
        >
          shift tracker
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeDayShiftOption}
        >
          Day Shift Opt in
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeEmergencyCallBackOption}
        >
          Emergency Call-back
        </button>
        <button
          className=" font-bold w-60 h-11 bg-black text-white"
          type="submit"
          onClick={setOvertimeFourHourCallBAckOption}
        >
          Four Hour Overtime
        </button>
      </div>
    </div>
  );
}
