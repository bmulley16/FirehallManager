import { ProfileAside } from "../components/accountPageAside";

export function InventoriesPage() {
  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <ProfileAside></ProfileAside>
      </aside>
      <div className="w-3/4 p-4">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Mount Pearl Station</h1>

          <h3 className="">You are assigned to the back of the engine</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md">Item 1</div>
          <div className="bg-white p-4 rounded shadow-md">Item 2</div>
          <div className="bg-white p-4 rounded shadow-md">Item 3</div>
          {/* Add more inventory items as needed */}
        </div>
      </div>
    </div>
  );
}
