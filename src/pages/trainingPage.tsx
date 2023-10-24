import { ProfileAside } from "../components/accountPageAside";

export function TrainingPage() {
  return (
    <div className="flex-1 flex h-screen w-screen">
      <ProfileAside></ProfileAside>

      <div className=" h-full w-full grid grid-cols-2  ">
        <div className=" col-span-2">
          <h1 className="text-center ">Today's Training</h1>
        </div>
      </div>
    </div>
  );
}
