import Calender from "../components/Calender-and-staffing/calender";
import { ProfileAside } from "../components/accountPageAside";
import { OvertimeGridBlocks } from "../components/overtimePageGridBlocks";

export function OvertimePage() {
  return (
    <div className="flex h-screen bg-gray-800">
      <ProfileAside />
      <div className="flex-1">
        <div className="h-screen grid grid-cols-3 gap-4 p-4">
          <OvertimeBlock />
          <OvertimeGridBlocks heading="Projection"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Leave Balances"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Shift Trades"></OvertimeGridBlocks>
          <OvertimeGridBlocks heading="Sick Leave Guidelines"></OvertimeGridBlocks>
          <div className=" h-full  p-4 rounded bg-white flex flex-col items-center">
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}

function OvertimeBlock() {
  return (
    <OvertimeGridBlocks heading="Overtime">
      <p>this is a test</p>
      <p>foobar</p>
    </OvertimeGridBlocks>
  );
}

function ProjectionBlock() {}
