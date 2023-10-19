import Calender from "../components/Calender-and-staffing/calender";
import { ProfileAside } from "../components/accountPageAside";
import { OvertimeGridBlocks } from "../components/overtimePageGridBlocks";
export function OvertimePage() {
  return (
    <div className="flex h-screen bg-gray-800">
      <ProfileAside />
      <div className="flex-1">
        <div className="h-full grid grid-cols-3 gap-4 p-4">
          <OvertimeGridBlocks heading="Overtime"></OvertimeGridBlocks>
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
