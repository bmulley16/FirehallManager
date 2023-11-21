import React from "react";
import { ProfileAside } from "../components/accountPageAside";
import { Administration } from "../components/administrationComponent";

export function AdministrationPage() {
  return (
    <div className="flex w-full h-full">
      <ProfileAside />
      <div className="flex flex-col gap-4 p-4">
        <Administration title="Leave Forms" />
        <Administration title="Training Forms" />
        <Administration title="Item Request Forms" />
        <Administration title="Exposure Forms" />
        <Administration title="Meal Forms" />
      </div>
    </div>
  );
}
