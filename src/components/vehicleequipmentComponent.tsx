// VehicleEquipmentComponent.jsx
import React, { useState } from "react";

export function VehicleEquipmentComponent(props: any) {
  const [bgColor, setBgColor] = useState("bg-white");
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setBgColor((prevColor) =>
      prevColor === "bg-green-500" ? "bg-white" : "bg-green-500"
    );

    setIsPressed(true);
  };

  return (
    <div
      onClick={handleClick}
      className={`py-4 px-6 rounded-lg flex items-center justify-between ${bgColor} border border-gray-300 mb-4`}
    >
      <div>
        <h1 className="text-xl font-semibold">{props.text}</h1>
        <h2 className="text-sm text-gray-600">Quantity: {props.quantity}</h2>
      </div>

      <div>
        <h1>Pocket 1</h1>
      </div>
    </div>
  );
}
