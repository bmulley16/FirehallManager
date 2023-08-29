export function MainDashboard() {
  return (
    <div className=" w-full h-full bg-[url('src\\assets\\fire-trucks-down-center-of-road.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex-auto grid grid-cols-3 grid-rows-3 gap-x-[5px]  gap-y-[10px] p-6">
        <div className=" col-span-2 bg-white shadow rounded-lg bg-opacity-75"></div>
        <div className=" bg-white shadow bg-opacity-75 row-span-2 w-2/3 mx-auto rounded-2xl "></div>
        <div className="  bg-white shadow bg-opacity-75 rounded-2xl"></div>
        <div className="  bg-white shadow bg-opacity-75 rounded-2xl"></div>
        <div className="  bg-white shadow bg-opacity-75 col-span-2 rounded-2xl"></div>
        <div className="  bg-white shadow bg-opacity-75 w-2/3 mx-auto rounded-2xl"></div>
      </div>
    </div>
  );
}
