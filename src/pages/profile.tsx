import { ProfileAside } from "../components/accountPageAside";
import { MainDashboard } from "../components/profileMainDashboard";
export function Profile() {
  return (
    <div className=" flex w-screen h-screen ">
      <ProfileAside></ProfileAside>
      <MainDashboard></MainDashboard>
    </div>
  );
}
