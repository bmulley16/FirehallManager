import * as assets from "../assets";
// import { images } from '../assets'

// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";

// @ts-ignore
import { Button } from "./banners/buttons";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          className={`flex justify-center items-center text-center bg-cover bg-center  h-full w-full bg-no-repeat bg-gradient-to-r from-black-500 to-transparent`}
          style={{
            backgroundImage: `url(${assets.images.mainBg})`,
          }}
        >
          <HomepageBanner></HomepageBanner>
        </div>
      </div>
    </>
  );
}

export default App;
