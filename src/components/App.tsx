import * as assets from "../assets";
// import { images } from '../assets'
import LoginPage from "./pages.tsx/loginpage";
// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";

import Button from "./banners/buttons";

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
