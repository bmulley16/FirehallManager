// @ts-ignore

import Button from "../banners/buttons";

function HomepageBanner() {
  return (
    <div className=" flex-col ">
      <h1 className="text-8xl  text-white font-bold  ">Emergico</h1>
      <div className="text-center border-2 border-white-500 max-w-xl ">
        <h2 className="text-2xl  text-white font-light ">
          The Leader in Emergency Managment
        </h2>
        <Button></Button>
      </div>
    </div>
  );
}

export default HomepageBanner;
