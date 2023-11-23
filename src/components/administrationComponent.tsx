import React from "react";
import { AdministrationSelector } from "../types";

export function Administration(props: AdministrationSelector) {
  return (
    <div className="bg-white rounded-lg shadow-md  hover:bg-green-500 w-2/3 ">
      <h1 className=" hover:font-bold m-4 text-xl font-semibold text-center">
        {props.title}
      </h1>
    </div>
  );
}
