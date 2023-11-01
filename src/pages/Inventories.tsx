import { ProfileAside } from "../components/accountPageAside";
import { InventorySelectionButton } from "../components/buttons/inventorySelectorbutton";
export function InventoriesPage() {
  return (
    <div className="flex bg-gray-100">
      <aside className="w-1/4 p-4">
        <ProfileAside></ProfileAside>
      </aside>
      <div className="w-3/4 p-4 my-8">
        <div className="text-center mb-8 ">
          <h1 className="text-3xl font-bold text-blue-600">
            Mount Pearl Station
          </h1>
          <h3 className="text-gray-600">Station Assignment: Engine 4 Seat 3</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 my-20">
          <InventorySelectionButton
            link="/inventories/daily-equipment-inventories"
            text="Daily Equipment Inventories"
          ></InventorySelectionButton>
          <InventorySelectionButton
            link="/inventories/station-inventories"
            text="Station Inventories"
          ></InventorySelectionButton>
          <InventorySelectionButton
            link="inventories/driver-checklist"
            text="Driver Checklist"
          ></InventorySelectionButton>
        </div>
      </div>
    </div>
  );
}
