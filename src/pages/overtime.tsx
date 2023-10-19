import Calender from "../components/Calender-and-staffing/calender";
import { ProfileAside } from "../components/accountPageAside";

export function OvertimePage() {
  return (
    <div className="flex h-screen bg-gray-800">
      <ProfileAside />
      <div className="flex-1">
        <div className="h-full grid grid-cols-3 gap-4 p-4">
          <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
              Overtime
            </h2>
          </div>
          <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
              Projections
            </h2>
          </div>
          <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
              Leave Balances
            </h2>
          </div>
          <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
              Shift Trades
            </h2>
          </div>
          <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
            <h2 className="text-xl font-extrabold text-center pb-1 border-b-2 border-red-700">
              Sick Leave
            </h2>
          </div>
          <div className="col-span- p-4 rounded bg-white flex flex-col items-center">
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}
