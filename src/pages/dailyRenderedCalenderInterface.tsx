import React from "react";

interface DailyOnClickInterfaceProps {
  selectedDay?: number;
}

function DailyOnClickComponent(selectedDay: DailyOnClickInterfaceProps) {
  return <div className=" h-16">Hello World</div>;
}

export default DailyOnClickComponent;
