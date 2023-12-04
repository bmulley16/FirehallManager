import { ProfileAside } from "../components/accountPageAside";
import * as utils from "../utils/api";
export function EquipmentPage() {
  return (
    <div className=" flex">
      <aside>
        <ProfileAside></ProfileAside>
      </aside>
      <div className="w-full h-screen bg-[url('C:\Projects\FirehallManager\Images\personalInventorybackground.jpg')] bg-center bg-cover bg-no-repeat grid-rows-3 grid-cols-2 gap-4">
        <div className=" col-span-2">
          <h1 className="text-white">Hello everyone</h1>
        </div>
      </div>
    </div>
  );
}
