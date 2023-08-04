// @ts-ignore
import * as assets from "../assets";
// import { images } from '../assets'

// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";
// @ts-ignore
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div
          className={`bg-cover bg-center bg-[url("C:\\Projects\\FirehallManager\\src\\assets\\firefightingBackgrounMain.jpg")] h-full w-full bg-no-repeat bg-blend-overlay from-black-500 to-transparent`}
        >
          <HomepageBanner></HomepageBanner>
        </div>
      </div>
    </>
  );
}

export default App;
