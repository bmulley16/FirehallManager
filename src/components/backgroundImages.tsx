import * as assets from "../assets";

function BackgroundImages() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: `url(${assets.images.mainBg})`,
        }}
      ></div>
    </div>
  );
}

export default BackgroundImages;
