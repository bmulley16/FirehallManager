import { ProfileAside } from "../components/accountPageAside";
import { MainDashboard } from "./profileMainDashboard";
export function Profile() {
  return (
    <div className=" flex w-screen h-screen ">
      <ProfileAside></ProfileAside>
      <MainDashboard></MainDashboard>
    </div>
  );
}
