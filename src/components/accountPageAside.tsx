export function ProfileAside() {
  return (
    <aside className=" w-60 shadow   min-h-screen p-0 text-center flex flex-col  content-center bg-gray-900 space-x-4 text-white ">
      <div>
        <img
          className="h-32 w-32 rounded-full mx-auto mt-5 "
          src="src\assets\Emergico-Logo.jpg"
          alt="Comany Logo"
        />
        <h1 className=" mt-10">
          <span className="text-4xl underline decoration-inherit ">
            Welcome
          </span>
          <br />
          <br />
          <br />
          <span className=" text-2xl">Bryce Mulley</span>
        </h1>
      </div>

      <div className="my-auto mx-auto">
        <ul className=" h-full w-full flex flex-col text-left justify-evenly">
          <li>Administration</li>
          <li>Equipment</li>
          <li>Inventories</li>
          <li>Overtime</li>
          <li>Training</li>
          <li>Mess Managment</li>
          <li>Contacts</li>
        </ul>
      </div>
    </aside>
  );
}
