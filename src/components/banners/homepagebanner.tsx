import React from "react";
import Button from "../buttons/Button";

function HomepageBanner() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-black">
      <h1 className="text-6xl font-bold">Emergico</h1>
      <div className="text-center max-w-lg mt-4">
        <h2 className="text-2xl font-light">
          The Leader in Emergency Management
        </h2>
        <Button />
      </div>
    </div>
  );
}

export default HomepageBanner;
