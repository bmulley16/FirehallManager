import React from "react";
import { AdministrationSelector } from "../types";

export function Administration(props: AdministrationSelector) {
  return (
    <div className="bg-white rounded-lg shadow-md  hover:bg-green-500 w-2/3 ">
      <button className=" hover:font-bold text-xl p-4 font-semibold text-center w-full h-full">
        {props.title}
      </button>
    </div>
  );
}
