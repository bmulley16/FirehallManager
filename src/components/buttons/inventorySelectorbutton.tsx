import { Link } from "react-router-dom";

// ask devon about the types here
export function InventorySelectionButton(props: any) {
  return (
    <Link to={props.link}>
      <div className="bg-white col-span-2 p-4 rounded-lg shadow-md">
        <button className="text-2xl font-bold text-blue-600 text-center mb-4">
          {props.text}
        </button>
      </div>
    </Link>
  );
}
