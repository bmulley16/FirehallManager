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
  {
    name: "65mm Wye",
    key: "sixtyFiveWye",
  },

  {
    name: "65mm Siamese",
    key: "sixtyFiveSiamese",
  },
  {
    name: "65mm - 38mm Gated Wye",
    key: "sixtyFiveThirtyEightWye",
  },
  {
    name: "38mm - 38mm Gated Wye",
    key: "thirtyEightThirtyEightWye",
  },
  {
    name: " 65mm Nozzle",
    key: "sixtyFiveNozzle",
  },

  {
    name: "65mm Double Females",
    key: "sixtyFiveDoubleFemale",
  },
  {
    name: "65mm Double Males",
    key: "sixtyFiveDoubleMale",
  },
  {
    name: "65mm-38mm Reducer",
    key: "sixtyFiveThirtyEightReducer",
  },
  {
    name: "38mm Double Male",
    key: "thirtyEightDoubleMale",
  },
  {
    name: "38mm Double Female",
    key: "thirtyEightDoubleFemale",
  },
  {
    name: "Hard Suction Key",
    key: "hardSuctionKey",
  },

  {
    name: "30m - 45m Hose",
    key: "longHighRiseHose",
  },

  {
    name: "Emergency Flares",
    key: "emergencyFlares",
  },

  {
    name: "100mm Soft Suction",
    key: "oneHundredmmSoftSuction",
  },
  {
    name: "Wheel Blocks",
    key: "wheelBlocks",
  },
  {
    name: "Hose Keys",
    key: "hoseKeys",
  },

  {
    name: "Stortz Keys",
    key: "stortzKeys",
  },
  {
    name: "Ball Peen Hammer",
    key: "ballPeenHammer",
  },
  {
    name: "Rubber Hammer",
    key: "rubberHammer",
  },
  // Pocket 2:

  {
    name: "3m - 65m Hose",
    key: "shortHighRiseHose",
  },
  {
    name: "45mm Nozzle",
    key: "fourtyFiveMillimeterNozzle",
  },

  {
    name: "30m - 45m Hose",
    key: "longHighRiseHose",
  },
  {
    name: "65mm X 38mm Gated Wye",
    key: "sixtyFiveThirtyEightGatedWye",
  },
  {
    name: "Door Wedges",
    key: "doorWedges",
  },
  {
    name: "Sprinkler Wedges",
    key: "sprinklerWedges",
  },
  {
    name: "45mm Standard Pipe Double Female",
    key: "shortDoubleFemale",
  },
  {
    name: "14m Lashings",
    key: "fourteenMeterLashings",
  },
  {
    name: "100ft Utility Rope",
    key: "oneHunderedFootUtilityRope",
  },
  {
    name: "PFD",
    key: "pfd",
  },
  {
    name: "Life-Ring and Throw rope",
    key: "lifeRightThrowRope",
  },
  {
    name: "Throw Bag",
    key: "throwBag",
  },
  {
    name: "Soap Sprayer",
    key: "soapSprayer",
  },
  {
    name: "Garden Hose and Nozzle",
    key: "gardenHoseandNozzle",
  },
  {
    name: "Scrub Brush",
    key: "scrubBrush",
  },
  {
    name: "2 1/2 to 3/4 Adapter",
    key: "twoandHalftoThreeQuarterAdapter",
  },
  {
    name: "Soap",
    key: "soap",
  },
  {
    name: "Bucket",
    key: "bucket",
  },
];

export function Pockets(props: any) {
  const [bgColor, setBgColor] = useState("bg-white");
  const [isPressed, setIsPressed] = useState(false);

  const handleColor = () => {
    setBgColor((prevColor) =>
      prevColor === "bg-green-500" ? "bg-white" : "bg-green-500"
    );

    setIsPressed(true);
  };

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
              sixtyFiveWye: 1,
              sixtyFiveSiamese: 1,
              sixtyFiveThirtyEightGatedWye: 1,
              thirtyEightThirtyEightWye: 1,
              sixtyFiveNozzle: 2,
              sixtyFiveDoubleFemale: 2,
              sixtyFiveDoubleMale: 2,
              sixtyFiveThirtyEightReducer: 1,
              thirtyEightDoubleMale: 1,
              thirtyEightDoubleFemale: 1,
              hardSuctionKey: 1,
              emergencyFlares: 1,
              oneHundredmmSoftSuction: 1,
              wheelBlocks: 2,
              hoseKeys: 4,
              stortzKeys: 2,
              ballPeenHammer: 1,
              rubberHammer: 1,
            },
            {
              shortHighRiseHose: 1,
              fourtyFiveMillimeterNozzle: 2,
              longHighRiseHose: 1,
              sixtyFiveThirtyEightGatedWye: 1,
              doorWedges: 6,
              sprinklerWedges: 12,
              shortDoubleFemale: 1,
              fourteenMeterLashings: 3,
              oneHunderedFootUtilityRope: 1,
              pfd: 2,
              lifeRightThrowRope: 1,
              throwBag: 1,
              soapSprayer: 1,
              gardenHoseandNozzle: 1,
              scrubBrush: 1,
              twoandHalftoThreeQuarterAdapter: 1,
              soap: 1,
              bucket: 1,
            },
          ],
        },
      ],
    },
  ];

  const pockets = inventories[0].engines[0].pockets;

  const allComponents = pockets.map((pocket, index) => {
    const keys = Object.keys(pocket);
    const components = keys.map((key) => (
      <VehicleEquipmentComponent
        key={`${index}-${key}`}
        text={titles.find((title) => title.key === key)?.name ?? "Unknown Item"}
        quantity={pocket[key]}
      />
    ));
    return components;
  });

  return (
    <div
      className={`py-4 px-6 rounded-lg flex items-center justify-between ${bgColor} border border-gray-300 mb-4 flex flex-col`}
      onClick={handleClick}
    >
      {props.text}
      {renderInventory && allComponents}
    </div>
  );
}
