import { useEffect, useState } from "react";
import { getEmployees } from "../../utils/api";
import { User } from "../../types";
import Calender from "./calender";

export function dailyStaffingComponent() {
  const [employeeNames, setEmployeeNames] = useState<User[]>([]);

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
