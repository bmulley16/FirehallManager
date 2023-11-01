import { Link } from "react-router-dom";

// ask devon about the types here
export function InventorySelectionButton(props: any) {
  return (
    <Link to={props.link}>
      <div className="bg-white col-span-2  rounded-lg shadow-md my-4 hover:shadow-xl">
        <button className="text-2xl font-bold p-4 text-blue-600 text-center min-w-full hover:font-extrabold ">
          {props.text}
        </button>
      </div>
    </Link>
  );
}
