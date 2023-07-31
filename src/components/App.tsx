import * as assets from "../assets";
// import { images } from '../assets'

// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";

import { Route, Routes } from "react-router-dom";
import Home from "../components/App";
import LoginPage from "../components/pages.tsx/loginpage";




import Button from "./banners/buttons";

function App() {
  return (
    <>

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
;
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
