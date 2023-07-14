import { images } from "../../assets";

function HomepageBanner() {
  return <h1 className={`bg-[url(${images.mainBg})]`}> Emergico</h1>;
}

export default HomepageBanner;
