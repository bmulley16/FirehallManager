export function OvertimeGridBlocks(props: any) {
  return (
    <div className="col-span-1 p-4 rounded bg-white flex flex-col items-center">
      <h2 className="text-xl font-extrabold text-center pb-2 border-b-2 border-red-700">
        {props.heading}
      </h2>
    </div>
  );
}
