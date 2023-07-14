import * as assets from "../assets";
// import { images } from '../assets'

// @ts-ignore
import HomepageBanner from "./banners/homepagebanner";

//Default import
// import _something_ from ""
import bar from "./moduleA";

const a = "double";
const b = "single";
const c = `backticks ${b}`;

console.log(`foo = ${bar}`);

//namespaced import, import all as
// import * as _something_ from ""
// moduleB = { foo: foo, bar: bar }
import * as moduleB from "./moduleB";

//
import { foo } from "./moduleB";

function App() {
  return (
    <>
      <img src={assets.images.mainBg} alt="" />
      <HomepageBanner></HomepageBanner>
    </>
  );
}

export default App;
