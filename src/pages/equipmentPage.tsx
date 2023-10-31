import { ProfileAside } from "../components/accountPageAside";

export function EquipmentPage() {
  return (
    <div className=" flex">
      <aside>
        <ProfileAside></ProfileAside>
      </aside>
      <div className="flex">
        <div>
          <h1>You are currently Stationed at Mount</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}
