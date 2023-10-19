import React from "react";

// @ts-ignore
import * as assets from "../assets";
// import { images } from '../assets'
// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";

function App() {
  return (
    <div
      className=" w-screen bg-cover bg-center h-screen   items-center"
      style={{
        backgroundImage: `url('../assets/fire-trucks-down-center-of-road.jpg')`,
      }}
    >
      <HomepageBanner />
    </div>
  );
}

export default App;
