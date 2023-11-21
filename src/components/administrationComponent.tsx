import React from "react";
import { AdministrationSelector } from "../types";

export function Administration(props: AdministrationSelector) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h1 className="text-xl font-semibold">{props.title}</h1>
    </div>
  );
}
