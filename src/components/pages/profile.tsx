import { ProfileAside } from "../accountPageAside";
import { MainDashboard } from "../profileMainDashboard";
export function Profile() {
  return (
    <div className=" flex ">
      <ProfileAside></ProfileAside>
      <MainDashboard></MainDashboard>
    </div>
  );
}
