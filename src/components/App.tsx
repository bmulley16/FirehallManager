import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import * as assets from "../assets";
// import { images } from '../assets'
// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";
// @ts-ignore

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div
          className={`bg-cover bg-center bg-[url('src\\assets\\fire-trucks-down-center-of-road.jpg')] h-full w-full bg-no-repeat bg-blend-overlay from-black-500 to-transparent`}
        >
          <HomepageBanner></HomepageBanner>
        </div>
      </div>
    </>
  );
}

export default App;
