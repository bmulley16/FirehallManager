// DailyInventory.jsx
import React from "react";
import { VehicleEquipmentComponent } from "../components/vehicleequipmentComponent";
import { ProfileAside } from "../components/accountPageAside";

const titles = [
  {
    name: "Hydrant Keys",
    key: "hydrantKeys",
  },
];

export function DailyInventory() {
  const inventories = [
    {
      engines: [
        {
          pockets: [
            {
              hydrantKeys: 2,
              groundMonitorStand: 1,
              deckMonitorStand: 1,
            },
          ],
        },
      ],
    },
  ];

  const keys = Object.keys(inventories[0].engines[0].pockets[0]);

  const components = keys.map((key) => {
    <VehicleEquipmentComponent
      text={titles.find((title) => title.key === key)?.name}
      quantity={2}
    />;
  });

  const stationinventories = {
    Stations: {
      Engine4: {
        pocket1: {
          hydrantKeys: 2,
        },
        pocket2: {},
        pocket3: {},
        pocket4: {},
        pocket5: {},
        pocket6: {},
        pocket7: {},
        pocket8: {},
        pocket9: {},
        pocket10: {},
      },

      Rescue4: {},
    },
  };

  return (
    <div className="flex">
      <ProfileAside></ProfileAside>
      <div className="container mx-auto p-8">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Engine 4</h1>
        </div>

        <VehicleEquipmentComponent text="Hydrant Keys" quantity={2} />
        <VehicleEquipmentComponent text="Ground Monitor Stand" quantity={1} />
        <VehicleEquipmentComponent text="Deck Monitor Stand" quantity={1} />
        <VehicleEquipmentComponent text="Stream Straightener" quantity={1} />
        <VehicleEquipmentComponent text="Straight Bore Tips" quantity={4} />
        <VehicleEquipmentComponent text="Metal Bucket" quantity={1} />
        <VehicleEquipmentComponent text="Chimney Bombs" quantity={10} />
        <VehicleEquipmentComponent text="Hose Straps" quantity={3} />
        <VehicleEquipmentComponent
          text="Standard Stortz Connection"
          quantity={1}
        />
        <VehicleEquipmentComponent
          text="65mm - 100mm Stortz Connection"
          quantity={1}
        />
        <VehicleEquipmentComponent text="Chimney Nozzle" quantity={1} />
        <VehicleEquipmentComponent text="Cellar Nozzle" quantity={1} />
        <VehicleEquipmentComponent text="Strainer" quantity={1} />
        <VehicleEquipmentComponent text="Hydrant Gate" quantity={1} />

        {components}
      </div>
    </div>
  );
}
