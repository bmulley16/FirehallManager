export function OvertimeGridBlocks(props: any) {
  return (
    <div className=" h-full col-span-1 p-4 rounded bg-white flex flex-col items-center ">
      <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
        {props.heading}
      </h2>

      <div className="bg-blue-200 p-4 mt-4 rounded-lg w-full">
        <p className="text-base text-gray-700 h-full">{props.textContent}</p>
      </div>
    </div>
  );
}
