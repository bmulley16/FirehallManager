import React from "react";
import { ProfileAside } from "../components/accountPageAside";
import { Administration } from "../components/administrationComponent";

export function AdministrationPage() {
  return (
    <div className="flex w-full h-screen ">
      <ProfileAside />
      <div className="flex flex-col w-full h-screen bg-[url('C:\Projects\FirehallManager\Images\paperBackground.jpg')] bg-center bg-cover">
        <div className="h-2/3 w-full flex justify-center items-center ">
          <h1 className=" backdrop-blur-md p-6 text-gray-900 font-bold text-2xl rounded-md ">
            Find all of your administrative requirements here!
          </h1>
        </div>
        <div className="  flex flex-col gap-4 p-4 items-center">
          <Administration title="Leave Forms" />
          <Administration title="Training Forms" />
          <Administration title="Item Request Forms" />
          <Administration title="Exposure Forms" />
          <Administration title="Meal Forms" />
        </div>
      </div>
    </div>
  );
}
