import { VehicleEquipmentComponent } from "./vehicleequipmentComponent";
import { Inventory } from "../types";
import { useState } from "react";

const titles = [
  {
    name: "Hydrant Keys",
    key: "hydrantKeys",
  },

  {
    name: "Ground Monitor Stand",
    key: "groundMonitorStand",
  },

  {
    name: "Deck Monitor Extension",
    key: "deckMonitorExtension",
  },

  {
    name: "Stream Straightener",
    key: "streamStraightener",
  },

  {
    name: "Straight Bore Tips",
    key: "straightBoreTips",
  },

  {
    name: "Metal Bucket",
    key: "metalBuckets",
  },

  {
    name: "Deck Monitor Extension",
    key: "deckMonitorExtension",
  },

  {
    name: "Chimney Bombs",
    key: "chimneyBombs",
  },

  {
    name: "Hose Straps",
    key: "hoseStraps",
  },

  {
    name: "Standard Stortz Connection",
    key: "standardStortzConnection",
  },

  {
    name: "65mm - 100mm Stortz Connection",
    key: "angleStortz",
  },

  {
    name: "Chimney Nozzle",
    key: "chimneyNozzle",
  },

  {
    name: "Cellar Nozzle",
    key: "cellarNozzle",
  },

  {
    name: "Strainer",
    key: "strainer",
  },

  {
    name: "Hydrant Gate",
    key: "hydrantGate",
  },
];

export function Pockets(props: string) {
  const [renderInventory, setrenderInventory] = useState(false);
  const handleClick = () => {
    setrenderInventory(!renderInventory);
  };
  const inventories: Inventory[] = [
    {
      engines: [
        {
          pockets: [
            {
              hydrantKeys: 2,
              groundMonitorStand: 1,
              deckMonitorStand: 1,
              streamStraightener: 1,
              straightBoreTips: 4,
              metalBucket: 1,
              chimneyBombs: 10,
              hoseStraps: 3,
              standardStortzConnection: 1,
              angleStortz: 1,
              chimneyNozzle: 1,
              cellarNozzle: 1,
              strainer: 1,
              hydrantGate: 1,
            },
          ],
        },
      ],
    },
  ];

  const keys = Object.keys(inventories[0].engines[0].pockets[0]);

  const components = keys.map((key) => {
    return (
      <VehicleEquipmentComponent
        text={titles.find((title) => title.key === key)?.name ?? "Unknown Item"}
        quantity={inventories[0].engines[0]?.pockets[0][key]}
      ></VehicleEquipmentComponent>
    );
  });

  return (
    <div onClick={handleClick}>
      <div>props.text</div>
      {renderInventory && components}
    </div>
  );
}
