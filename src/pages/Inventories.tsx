import { ProfileAside } from "../components/accountPageAside";

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
          <div className="bg-white col-span-2 p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Daily Equipment Inventories
            </h1>
          </div>
          <div className="bg-white p-4 col-span-2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Station Inventories
            </h1>
          </div>
          <div className="bg-white p-4 col-span-2 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Driver Check Sheet
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
