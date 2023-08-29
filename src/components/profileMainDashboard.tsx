export function MainDashboard() {
  return (
    <div className="flex-auto grid grid-cols-3 grid-rows-3 gap-x-[5px]  gap-y-[10px] ml-7 ">
      <div className=" bg-black col-span-2 rounded-2xl"></div>
      <div className=" bg-black row-span-2 w-2/3 mx-auto rounded-2xl "></div>
      <div className=" bg-red-500 rounded-2xl"></div>
      <div className=" bg-red-500 rounded-2xl"></div>
      <div className=" bg-red-500 col-span-2 rounded-2xl"></div>
      <div className=" bg-red-500 w-2/3 mx-auto rounded-2xl"></div>
    </div>
  );
}
