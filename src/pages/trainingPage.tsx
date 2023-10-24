import { ProfileAside } from "../components/accountPageAside";
import Calender from "../components/Calender-and-staffing/calender";

export function TrainingPage() {
  return (
    <div className="flex-1 flex h-screen w-screen bg-gray-100">
      <ProfileAside></ProfileAside>

      <div className="h-full w-full grid grid-cols-2 gap-4 p-4">
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center">Today's Training</h1>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center">Training Schedule</h1>
          <div className=" h-full w-full">
            <Calender></Calender>
          </div>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center">Training Documents</h1>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center">
            Supplemental Resources
          </h1>
        </div>
      </div>
    </div>
  );
}
