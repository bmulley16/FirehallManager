import { useEffect, useState } from "react";
import { getEmployees } from "../../utils/api";
import { ExampleUser } from "../../types";

export function dailyStaffingComponent() {
  const [employeeNames, setEmployeeNames] = useState<ExampleUser[]>([]);

  useEffect(() => {
    const employees = getEmployees();
    setEmployeeNames(employees);
  }, []);

  const divContainers = employeeNames.map((employee, index) => (
    <div key={index}>
      <h2>{employee.firstName}</h2>
    </div>
  ));

  return <div className="App">{divContainers}</div>;
}
