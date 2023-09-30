import React from "react";

interface DailyOnClickInterfaceProps {
  selectedDay?: number;
}

const DailyOnClickComponent: React.FC<DailyOnClickInterfaceProps> = ({
  selectedDay,
}) => {
  return <div className=" h-16">Hello World</div>;
};

export default DailyOnClickComponent;
