import React from "react";

// @ts-ignore
import * as assets from "../assets";
// import { images } from '../assets'
// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";
import { useUser, useSetUser } from "../hooks";

function App() {
  const user = useUser();
  const setUser = useSetUser();

  console.log("USER CONTEXT: ", user);

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
