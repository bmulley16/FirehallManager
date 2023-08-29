export function ProfileAside() {
  return (
    <aside className=" w-60 bg-white shadow rounded-lg bg-opacity-75  min-h-screen p-0">
      <h1>Emergico</h1>

      <h4>Navigation:</h4>
      {/* may have to come fool with this layout after to make it look nicer */}
      <div>
        <ul>
          <li>Administration</li>
          <li>Equipment</li>
          <li>Overtime</li>
          <li>Training</li>
          <li>Contacts</li>
          <li>Mess Managment</li>

          <li></li>
        </ul>
      </div>
    </aside>
  );
}
