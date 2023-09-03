export function MainDashboard() {
  return (
    <div className=" w-full h-full bg-[url('src\\assets\\fire-trucks-down-center-of-road.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full flex-auto grid grid-cols-3 grid-rows-3 gap-x-[5px]  gap-y-[10px] p-6">
        <div className=" col-span-2 bg-white shadow rounded-lg bg-opacity-75 flex flex-col justify-between">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 pl-4 pt-2 w-full h-fit">
            Account Overview:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quia id nobis maiores doloremque vero deserunt dolorum, placeat quas
            sunt maxime tempora magnam consequuntur. Temporibus alias distinctio
            facilis nobis quis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias, eos!
          </div>
        </div>
        <div className=" bg-white shadow bg-opacity-75 row-span-2 w-2/3 mx-auto rounded-2xl ">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 pt-2 text-center  w-full h-fit">
            Announcments:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quia id nobis maiores doloremque vero deserunt dolorum, placeat quas
            sunt maxime tempora magnam consequuntur. Temporibus alias distinctio
          </div>
        </div>
        <div className="  bg-white shadow bg-opacity-75 rounded-2xl">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center pt-2 w-full h-fit">
            Annual Leave:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quia id nobis maiores doloremque vero deserunt dolorum, placeat quas
          </div>
        </div>
        <div className="  bg-white shadow bg-opacity-75 rounded-2xl">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center pt-2 w-full h-fit">
            Other Leave:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quia id nobis maiores doloremque vero deserunt dolorum,
          </div>
        </div>
        <div className="  bg-white shadow bg-opacity-75 col-span-2 rounded-2xl">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 pl-4 pt-2 w-full h-fit">
            Your Latest Trends:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quia id nobis maiores doloremque vero deserunt dolorum, placeat quas
            sunt maxime tempora magnam consequuntur. Temporibus alias distinctio
            facilis nobis quis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias, eos! Repellendus nemo necessitatibus,
            um voluptatibus porro dolores sit voluptates ratione excepturi!
          </div>
        </div>
        <div className="  bg-white shadow bg-opacity-75 w-2/3 mx-auto rounded-2xl">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800 text-center pt-2 w-full h-fit">
            Shift Trade Requests:
          </h1>
          <div className="text-gray-600 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}
